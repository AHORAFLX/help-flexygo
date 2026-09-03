

	declare @CRLF nvarchar(2) = char(13) + char(10)
	Declare @SQLSentence nvarchar(max)
	declare @OldOriginId nvarchar(max)
	declare @NewOriginId nvarchar(max)
	declare @error nvarchar(max)

	set @OldOriginId='2'
	set @NewOriginId='1'

	;WITH vOrigins AS (
	select 'select count(*) as OriginCount,'''+o.name+''' as TableName from ['+o.name+']  where OriginId='+@OldOriginId as OriginsTest, o.name as TableName from sysobjects  o
	inner join syscolumns c on c.id=o.id and c.name='OriginId'
	where o.type='U' and (o.name not like '%zVersion_%' and o.name <> 'Origins')
	)
	Select   
			@SQLSentence=replace(replace('select @xml = (select ''update ''+TableName+ '' set originid='+@NewOriginId+' where originid='+@OldOriginId+''' as TableName from ('+substring((
				Select 'UNION '+ST1.OriginsTest  AS [text()]
				From vOrigins ST1
				ORDER BY ST1.OriginsTest
				For XML PATH ('')
			),7,100000000000000)+') A where a.OriginCount>0 for xml path('''') )' ,'&gt;','>'),'&lt;','<')


	declare @xmlout xml
	DECLARE @ParmDefinition nvarchar(500); 

	exec sp_executesql @SQLSentence, N'@xml xml OUTPUT' ,@XML=@XMLout OUTPUT

	if not @XMLOut is null BEGIN

		declare @ErrorString nvarchar(max)
		SELECT @ErrorString='Database contains registers with OriginId '+@OldOriginId+':' + @CRLF + replace(replace(replace(replace(convert(nvarchar(max),@XMLout),'<originCount>',''),'</originCount>',' '),'<TableName>',''),'</TableName>',@CRLF) 
	
		set @Error += @ErrorString + @CRLF
		print @ErrorString

	END

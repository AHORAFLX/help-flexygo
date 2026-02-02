# Notices Sentences

Notices sentences is a utility to manage automatic alerts, either through on-screen warnings, push notifications or sending emails. It consists of automating a process to add records to the Notices, Notices\_Users and/or Mails\_Outbox system tables. To use the notices sentences we must define 2 things: a notice sentence and a cron job.

*   **The notice sentence:** consists of defining querys in sql that will provide us with the information to include in the notification tables
*   **The cron job:** is used to define when we want notifications to be generated

## Notices

It's the way system can send push notices or show alerts on the screen. This is shown with a list on an icon that lights up when the user has unread messages. To generate a notice, it is sufficient to add a record in the "Notices" table, and if we need the notification to be displayed by a group of users, we must add them as records in the "Notices\_Users" table.

To make it work the cron **UpdateNoticeBadge** must be active.
{: .flx-warning-card }

## Sentences

In the first instance we will define a notice sentence indicating a description, a cron job and the connection string (database where sql queries will be made)

### Notice Sentences

Use Notice Sentence to select wich fields will be placed in the Notices Table.

Remember that the notice table works in a similar way as a navigation node
{: .flx-warning-card }

```sql
SELECT 'New pending actions' as <b>Title</b>,
'You have new pending action' as <b>Message</b>,
cast(getdate() as smallDatetime) as <b>ReminderTime</b>, 
cast(Dateadd(WEEK,1,getdate()) as smalldatetime) as <b>ExpiryTime</b>, 
'app' as <b>MethodName</b>, 
0 as <b>AllUsers</b>, 
'object' as <b>TypeId</b>, 
'action' as <b>ObjectName</b>, 
'Actionstate=0' as <b>ObjectWhere</b>, 
'list' as <b>PageTypeId</b>, 
EmployeeId as <b>CurrentReference</b>
FROM ...
```

| Property | Description | Required |
| --- | --- | --- |
| **Title** | Notification Title | ✓ |
| **Message** | The notification message which you'll need to use HTML Markup | ✓ |
| **MethodName** | <fh-copy>App</fh-copy> Notification, <fh-copy>Push</fh-copy> notification, <fh-copy>PushMobile</fh-copy> for mobile device notification only or <fh-copy>Pushweb</fh-copy> for web browser notification only | ✓ |
| **ReminderTime** | The date time in which the notice will be sent | ✓ |
| **ExpiryTime** | The datetime in which the the notice will expire | ✓ |
| **AllUsers** | Send the notification to all users, if set to false remeber to fill out notification user Sentence | ✓ |
| **TypeId** | One of the valid Node Types: Object Link (object), Page Link (page), Process (process), Text (text), etc. | ✓ |
| **CurrentReference** | Value corresponding to the "Reference" field of Flexygo user. It can contain multiple values separated by ";". With this you avoid having to put a user statement. |     |
| **UserId** | Value corresponding to the "Id" field of the Flexygo user. It can contain multiple values separated by ";". With this you avoid having to put a user statement. If you use the CurrentReference field, you do not need to specify it. |     |
| **AfterClickEvent** | The js code that will get triggered after clicking the notificaton  |     |
| **CssClass** | The CSS class applied to the notification |     |
| **ObjectName** | The object name if you need to link to one on click |     |
| **ObjectWhere** | The object where if you need to link to one on click |     |
| **PageTypeId** | The page type id if you need to link to one on click |     |
| **PageName** | The page name if you need to link to one on click |     |
| **ReportName** | The report name if you need to link to one on click |     |
| **ReportParams** | The reports params if you need to link to one on click |     |
| **ProcessName** | The process name if you need to link to one on click |     |
| **Params** | The processes parameters if you need to link to one on click |     |
| **HelpId** | The help page id if you need to link to one on click |     |
| **URL** | An url if you need to link to one on click|     |
| **TableName** | The table name if you need to link to one on click|     |

_Example:_ "Upcoming offers that expire"

```sql
SELECT 'Offers theh expired this week ' + CAST(DATEPART (week, getdate())  AS varchar) AS [Title],
'You have ' +  
CASE WHEN count(1)=1 THEN 'an offer that expires in the next 7 days'  
ELSE CAST (count(1) AS varchar) + ' offers that expires in the next 7 days' END AS [Message], 
CAST(getdate() AS smallDatetime) AS ReminderTime, 
CAST(Dateadd(dd,1,getdate()) AS smalldatetime) AS ExpiryTime, 
0 AS AllUsers, 
EmployeeId AS currentReference, 
'app' AS MethodName, 
'object' AS TypeId, 
'current' AS TargetId, 
'list' AS PageTypeId, 
'offers' AS ObjectName, 
'Offers.sellbydate BETWEEN ( ''' + convert(varchar(10),GETDATE(),112) + ''' ) 
      AND DATEADD (WEEK, 1, ''' + convert(varchar(10),GETDATE(),112) + ''') 
      AND (Offers.State = 0)  AND (Offers.EmployeeId={{currentReference}})' as ObjectWhere
FROM (
	SELECT Offers.IdOferta, Offers.EmployeeId as EmployeeId
	FROM Offers
	WHERE Offers.SellByDate BETWEEN CAST(GETDATE() as date) AND dateadd(DAY,7, CAST(GETDATE() as date))
	AND (Offers.State = 0) AND Offers.SellByDate is not null
	) AS Assigned
GROUP BY EmployeeId
```

### User Notice Sentence

If you have not used the reference to the user in the main notification statement, you can set which users will receive the notification using an SQL query, in which you can specify the user identifier (UserId) or the reference (CurrentReference).

Use "User Notice Sentence" to select wich UserId should receive the notification.  
Remeber UserId should be obtained from Configuration Database.

```sql
SELECT UserId FROM ... WHERE ...
```

Sometimes user is not defined in our data model, then we can use the reference to user.

```sql
SELECT EmployeeId AS CurrentReference FROM ... WHERE ...
```

| Property | Description | Required |
| --- | --- | --- |
| **CurrentReference** | AspNetUsers Reference | ✓ |
| **UserId** | AspNetUsers UserID | ✓ |

_Example:_ "Upcoming offers that expire"

```sql
SELECT distinct 1 as UserId, 
EmployeeId as CurrentReference
FROM ( 
	SELECT Offers.IdOferta, Offers.EmployeeId AS EmployeeId
          FROM Offers
          WHERE Offers.SellByDate BETWEEN cast(GETDATE() as date) AND dateadd(DAY,7, cast(GETDATE() as date))
          AND (Offers.State =0) AND Offers.SellByDate is not null
    ) AS Assigned
GROUP BY EmployeeId
```

### Update Sentence

Use an update to sentence if needed after filling out the mails or notices tables.  
In the event that the notification is not addressed to all users, but to a specific group, we must indicate to which users.  
Either by identifying them using the system user identifier (UserId) or the reference to it in the data model (Reference).

```sql
UPDATE Mytable\_Log SET NotifiedError = 1 WHERE HASError = 1 AND NotifiedError = 0
```

### Mail Sentence

Use Mail Sentence to select which fields will be placed in the Mails\_Outbox Table.

```sql
SELECT 'dmi@flx.com' AS FromEmail, 
'David' AS FromName,
'New pending actions' AS Subject,
'You have new pending action' AS Body, 
CAST(GETDATE() AS smallDatetime) AS SendDate,
'johnpaul@beatdomain.com' AS [To],
'3E0A3AA1-0B56-4091-9736-200964B2D1F4|C49953C3-2BE8-4591-9601-99BDF77B1028' AS attachments
FROM ...
```

| Property | Description | Required |
| --- | --- | --- |
| **FromEmail** | Sender email | ✓ |
| **To** | To email | ✓ |
| **Subject** | Mail Subject | ✓ |
| **Body** | Mail Body | ✓ |
| **FromName** | Sender Name |     |
| **CC** | Carbon (mail) Copy |     |
| **CCO or BCC** | Blind Carbon (mail) Copy |     |
| **UserId** | Sender UserId |     |
| **SendDate** | Date used by cron to send mail |     |
| **ReplyTo** | Reply to email |     |
| **ObjectName** | Link click to an object |     |
| **ObjectWhere** | Link click to an object |     |
| **Attachments** | List od document Guid from document manager separated with pipes \| |     |

### Sms Sentence

You need to know that to be able to use it, it is necessary to enable the integration, for more information see the help of [abh sms](../AhoraBusinessHub/AbhSms.md).
Use Sms Sentence to select which fields will be placed in the Sms\_Outbox Table.

```sql
SELECT
'684352406' as Phone
,'You have new pending action' as Text
, cast(getdate() as smallDatetime) as SendDate
FROM ....
```

| Property | Description | Required |
| --- | --- | --- |
| **Phone** | Sender phone | ✓ |
| **Text** | Sms text | ✓ |
| **UserId** | Sender UserId |     |
| **SendDate** | Date used by cron to send mail |     |
| **ObjectName** | Link click to an object |     |
| **ObjectWhere** | Link click to an object |     |

### Cron Jobs

Finally, we must create a new cron job and indicate a name, a workgroup (default "Defaultgroup"), one short description, enabled... Next we select the shot schedule. In process options we must put the BuildMailandNotifications process and run as the admin user. In the name of the process we will put SysNoticeSentences and in object Where we will put the filter of the sentence that we just created (SentenceId = 'myalert')

Whatch the video about creation of cron job:

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/VIIhQnkH-QI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## About the standard processes

Once the sentences are defined, the cronjob completes the mentioned tables. Then other standard processes are responsible for notifying by mail or screen. To send alerts, there is a standard process that every minute analyzes the records added to the Notices and Notices\_Users tables and processes them to send alerts. This is done by another cronjob called UpdateNoticeBadge. To send the emails, there is a standard process that every minute analyzes the records added to the Mails\_Outbox table and processes them to send the emails. This is done by another cronjob called SendOutBoxEmails.
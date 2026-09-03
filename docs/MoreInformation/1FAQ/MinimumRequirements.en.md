# Minimum requirements

Flexygo requires:

* Windows Server 2013 or higher
* Internet Information Server (IIS)
* Microsoft Framework 4.5
* SQL 2016 Express

## Technical recommendations

The platform runs on IIS with framework 4.5 installed and uses Microsoft SQL starting from version 2016. Separate machines for IIS and SQL are recommended, especially with a high volume of users.

### For around 100 simultaneous users

**SQL machine:**

* Windows Server 2016 Standard or higher
* Intel Xeon processor (reference: ES-2650 v4 @ 2.20GHz)
* 16 GB RAM (expandable)
* 500 GB disk

**IIS machine:**

* Windows Server 2016 Standard or higher
* Intel Xeon processor (reference: ES-2650 v4 @ 2.20GHz)
* 8 GB RAM (expandable)
* Microsoft Framework 4.5
* 500 GB disk

Disk space varies depending on the nature of the project; an external NAS is recommended for large-scale document/image management.

## Scalability notes

Multiple IIS machines with load balancing can handle an increase in users. For databases exceeding 30 GB, see [this article on SQL Server memory](https://www.brentozar.com/archive/2018/11/how-much-memory-is-normal-for-sql-servers/).

## Installation guides

* [SQL Server installation](https://www.youtube.com/watch?v=ttcadOncjAM)
* [IIS installation](https://www.youtube.com/watch?v=fFKLuk1N4e4)

## Additional considerations

Optional but beneficial: redundant servers, security systems, data backups, and SQL clustering.

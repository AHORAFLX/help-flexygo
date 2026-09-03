# Installation

Here we will show you all the basics you need to know to install Flexygo correctly.

## Install Flexygo for the first time

To install Flexygo, you just need to download it using the button below and follow the installation steps. Before doing so, make sure you meet the [minimum requirements](#minimum-requirements):

[Download now](https://docs.flexygo.com/Setup/FlexyGoInstaller.zip){ .button }

## Minimum requirements

* Windows Server 2013 or later
* Internet Information Server (IIS)
* Microsoft Framework 4.5
* SQL 2016 Express

## Technical recommendations

In addition to checking the minimum requirements, you should follow the recommendations below to ensure your project runs smoothly. **Flexygo** runs on **IIS with Framework 4.5** installed, so you will need a **Windows Server 2013 or later**. Its configuration data model is **Microsoft SQL starting from version 2016**. We always recommend using separate machines for IIS and SQL, especially when there is a high volume of users.

In any case, and particularly when the future size of the project is unknown, we recommend using SQL Enterprise 2016 or later. Using an Enterprise version allows scalability and the use of more memory and processors as the project and number of users grow. However, this is not a minimum requirement, since SQL 2016 Express would also work.

Estimating the size of the machines depends on the type of project being addressed, as variables such as the type of application, number of users, and number of integrations with other services come into play.

For an application with around 100 concurrent users, we recommend:

**SQL machine:**

* Windows Server 2016 Standard or later
* Intel® Xeon® CPU E5-2650 v4 @ 2.20GHz (for reference only, it does not have to be this exact model)
* 16 GB RAM (expandable)
* 500 GB disk*

Follow [this video](https://www.youtube.com/watch?v=ttcadOncjAM) for proper installation.

**IIS machine:**

* Windows Server 2016 Standard or later
* Intel® Xeon® CPU E5-2650 v4 @ 2.20GHz (for reference only, it does not have to be this exact model)
* 8.00 GB RAM (expandable)
* Microsoft Framework 4.5
* 500 GB disk

Follow [this video](https://www.youtube.com/watch?v=fFKLuk1N4e4) for proper installation.

Disk space will depend on the nature of the project. You may choose to use an external NAS if document or image management with very large volumes is required.

Depending on the number of users, you can increase the number of IIS machines and place a load balancer in front of them to redirect traffic based on the load of each machine. Having multiple IIS servers also provides a certain level of fault tolerance in case one of them goes down.

### According to criticality

There are other recommendations that are not required for **Flexygo**, but may be interesting depending on the criticality of the project, such as:

* Redundant servers
* Security systems
* Data backup systems
* SQL deployed on a server cluster

### Large databases

When working with large databases of more than 30 GB, we recommend taking a look at this article to properly size your SQL Server:

[https://www.brentozar.com/archive/2018/11/how-much-memory-is-normal-for-sql-servers/](https://www.brentozar.com/archive/2018/11/how-much-memory-is-normal-for-sql-servers/)
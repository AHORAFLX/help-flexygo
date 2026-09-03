# Suggestions for optimizing IIS

Recommendations for optimizing IIS (version 10) at the server, IIS, application pool and website levels.

## Server level

* Set the power plan to **High performance** instead of **Balanced**.
* Disable power saving in the BIOS to use the full speed of the processors.

## Application pool

### General

* Start mode: `AlwaysRunning`
* Adjust the queue length for applications with many concurrent users

![](../../docs_assets/images/FAQ/IISOptimization/1.png)

### CPU

* Configure the action when usage reaches ≥80% for 5 minutes: kill `w3wp`

![](../../docs_assets/images/FAQ/IISOptimization/2.png)

### Process Model

* Set the **idle time-out** to `0` to keep the application always available

### Recycling

* Schedule recycles during low-usage hours
* Set the **regular time interval** to `0`

![](../../docs_assets/images/FAQ/IISOptimization/3.png)

## Website configuration

* Enable **Preload Enabled** to reduce the impact when recycling

![](../../docs_assets/images/FAQ/IISOptimization/4.png)

## Dynamic compression

!!! warning "Warning"
    Only recommended for dedicated IIS servers, since it increases RAM/CPU usage.

![](../../docs_assets/images/FAQ/IISOptimization/5.png)

![](../../docs_assets/images/FAQ/IISOptimization/6.png)

![](../../docs_assets/images/FAQ/IISOptimization/7.png)

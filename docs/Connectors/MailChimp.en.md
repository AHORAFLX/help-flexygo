# MailChimp Integration { .flx-title-with-image }

![MailChimp](/docs_assets/images/MailChimp/MailChimpLogoBlack.png){ .fh-image-of-title }

MailChimp is a marketing automation platform that helps you share email and advertising campaigns with customers and other stakeholders.

MailChimp integration area can be accessed by left toolbar menu. Click on Admin Work Area > Integrations > <flx-navbutton class="link" type="openPageName" pagename="syspage-generic-mailchimpcampaigns">MailChimp</flx-navbutton>.

API Key is required in order to connect with MailChimp API, so the first step is to inform it. If further info is needed you can get more help about API Keys visiting Mailchimp [documentation](https://mailchimp.com/es/help/about-api-keys/).
{: .flx-warning-card }

After executing the process, main MailChimp data as lists, templates or campaigns will be available in **flexygo**. This process may take several minutes depending on the amount of info stored in MailChimp application.

![Set APIKey](/docs_assets/images/MailChimp/apikey.png "Image 1. Set APIKey")

## MailChimp sections

### Lists

Once the process is completed, MailChimp lists can be inserted, modified or deleted from **flexygo**. Launch the process **Get lists** if lists have been modified directly from MailChimp application to synchronize the info again.

![Get lists](/docs_assets/images/MailChimp/lists.png "Image 2. Get lists")

When viewing a list you can see the list of contacts synced in **flexygo**, from where you can add new contacts to the list or delete them, these actions are immediately synced with the MailChimp list.

![View List](/docs_assets/images/MailChimp/list.png "Image 2.1. View List")

### Campaigns

Main information about MaiChimp campaigns is also displayed in this section. As with the lists, campaigns can be synchronized with he process **Get campaigns**. Click on to see additional details for each campaign.

![List Campaigns](/docs_assets/images/MailChimp/campaigns.png "Image 3. List Campaigns")

In this view page, there are two processes: **Get campaign info** and **Launch action campaign**. With the first one the detailed information is refreshed. The second one allows you to effect actions as send, test or replicate a campaign for expample.  
When the campaign is not launched, the contact information that appears is the contacts imported into flexygo associated with the campaign list , from where we can add new contacts which will be immediately synchronized with the Mailchimp list.

![Campaign](/docs_assets/images/MailChimp/campaign_save.png "Image 3.1. Campaign")

When the campaign has been launched, the information of the contacts refers to the sending of the campaign, where it is shown if it has been sent to said contact, if they have opened it or clicked on it.  
A module with data referring to the campaign report is also enabled.

![Campaign](/docs_assets/images/MailChimp/campaign.png "Image 3.2. Campaign")

### Templates

Custom and predefined MailChimp templates can also be managed from this section and synchronized with **Get templates**.

![Template](/docs_assets/images/MailChimp/template.png "Image Template")

### Contacts

One of the most interesting things of the integration is the option of creating contacts from an object of a **flexygo** application in order to upload them to MailChimp. In the MailChimp Object Configuration create a new register selecting and object and their properties to create new contacts. An object view can optionally be used to get more properties. Next step would be execute the process **Generate contacts**. Then, contacts will appear in module below. They can be selected and uploaded to MailChimp through **Upload contacts**.

![Object contact configuration](/docs_assets/images/MailChimp/object.png "Image 4. Object contact configuration")

![Upload contacts](/docs_assets/images/MailChimp/upload.png "Image 5. Upload contacts")

It has some pre-established filters that will allow you to locate the contacts that have been modified or are pending upload to MailChimp.

![Upload contacts](/docs_assets/images/MailChimp/contacts_presets.png "Image 5.1 Upload contacts")

### Configuration

API Key can be changed from configuration area. There's also a process named **Change MailChimp account** to **delete** all MailChimp data in **flexygo** if you want to change to another MailChimp account.

![Configuration](/docs_assets/images/MailChimp/configuration.png "Image 6. Configuration")
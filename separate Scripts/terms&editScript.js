javascript:

/* Insert ATTRIBUTESFORINSERTION here */

/* Terms/Edit Page */
$('campaign_division_id').value=attributesForInsertion['division'];
$('campaign_opportunity_id').value=attributesForInsertion['sfOpportunityId'];
if (attributesForInsertion["feature"]=="Feature") $('campaign_top_deal').checked="TRUE";
var launchDate = new Date(attributesForInsertion['featureDate']);
var endDate = new Date(attributesForInsertion['featureEndDate']);
$('campaign_schedule_date_1i').value=launchDate.getFullYear();
$('campaign_schedule_date_2i').value=launchDate.getMonth()+1;
$('campaign_schedule_date_3i').value=launchDate.getDate();
$('campaign_deadline_date_1i').value=endDate.getFullYear();
$('campaign_deadline_date_2i').value=endDate.getMonth()+1;
$('campaign_deadline_date_3i').value=endDate.getDate();
$('campaign_title').value=attributesForInsertion['vendorName'];
$('campaign_campaign_money_pledge_remit_to').value=attributesForInsertion['billingAddress'];
$('campaign_campaign_money_pledge_campaign_constraints_unit_price').value=attributesForInsertion['unitSellPrice'];
$('campaign_campaign_money_pledge_campaign_constraints_unit_value').value=attributesForInsertion['unitValue'];
$('campaign_campaign_money_pledge_campaign_constraints_unit_buy_price').value=attributesForInsertion['unitBuyPrice'];
$('campaign_campaign_money_pledge_campaign_constraints_min_pledges').value=attributesForInsertion['dealMin'];
$('campaign_campaign_money_pledge_campaign_constraints_max_pledges').value=attributesForInsertion['dealMax'];
$('campaign_campaign_money_pledge_member_constraints_minimum').value=1;
$('campaign_campaign_money_pledge_member_constraints_maximum').value=attributesForInsertion['buyerMax'];
$('campaign_campaign_money_pledge_member_constraints_suggested').value=1;
$('campaign_deal_vendor_name').value=attributesForInsertion['vendorName'];
$('campaign_deal_vendor_website_label').value=attributesForInsertion['vendorURL'];
$('campaign_deal_vendor_website_url').value=attributesForInsertion['vendorURL'];
$('campaign_location_note').value=attributesForInsertion['redemptionAddress'];


/* color fields which need Attention */
$('campaign_campaign_money_pledge_remit_to').style.color="black";
$('campaign_campaign_money_pledge_campaign_constraints_unit_buy_price').style.color="black";

$$('div.field.campaign_requires_shipping_address.check')[0].style.backgroundColor='pink';
$$('div.field.campaign_requires_shipping_address.check')[0].onmouseover = function() { this.style.backgroundColor ="white";};
$('campaign_release_date_1i').style.backgroundColor='pink';
$('campaign_release_date_1i').onmouseover = function() { this.style.backgroundColor ="white";};
$('campaign_release_date_2i').style.backgroundColor='pink';
$('campaign_release_date_2i').onmouseover = function() { this.style.backgroundColor ="white";};
$('campaign_release_date_3i').style.backgroundColor='pink';
$('campaign_release_date_3i').onmouseover = function() { this.style.backgroundColor ="white";};
$('date_hour').style.backgroundColor='pink';
$('date_hour').onmouseover = function() { this.style.backgroundColor ="white";};
$('campaign_vendor_id').style.backgroundColor='pink';
$('campaign_vendor_id').onmouseover = function() { this.style.backgroundColor ="white";};
$('campaign_campaign_money_pledge_remit_to').style.backgroundColor="pink";
$('campaign_campaign_money_pledge_remit_to').onmouseover = function() { this.style.backgroundColor ="white";};
$('campaign_campaign_money_pledge_member_constraints_maximum').style.backgroundColor='pink';
$('campaign_campaign_money_pledge_member_constraints_maximum').setAttribute('onclick', 'this.style.backgroundColor="white"');
$('map_test_link').style.backgroundColor="pink";
$('map_test_link').setAttribute('onclick', 'this.style.backgroundColor="white"');
$('campaign_location_note').style.backgroundColor="pink";
$('campaign_location_note').setAttribute('onclick', 'this.style.backgroundColor="white"');

/* end color */

return null;
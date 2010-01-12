javascript:

/* Insert ATTRIBUTESFORINSERTION here */

/* Terms/Edit Page */
$('campaign_division_id').value=attributesForInsertion['division'];
$$('div.field.campaign_division_id')[0].childNodes[0].innerHTML="Subdivision: " + attributesForInsertion["subdivision"];
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
if (isNaN(attributesForInsertion['dealMax']) != true) {
	$('campaign_campaign_money_pledge_campaign_constraints_max_pledges').value=attributesForInsertion['dealMax']; };
$('campaign_campaign_money_pledge_member_constraints_minimum').value=1;
$('campaign_campaign_money_pledge_member_constraints_maximum').value=attributesForInsertion['buyerMax'];
$$('div.field.campaign_campaign_money_pledge__member_constraints_maximum.text')[0].childNodes[0].innerHTML+="<br /><span style='color:gray''>" + attributesForInsertion['conditions'] + "</span>";
$('campaign_campaign_money_pledge_member_constraints_suggested').value=1;
$('campaign_deal_vendor_name').value=attributesForInsertion['vendorName'];
var anchorText = attributesForInsertion['vendorURL'];
if (anchorText.indexOf('http://') != -1) anchorText=anchorText.slice(7);
if (anchorText.charAt(anchorText.length - 1)=="/") anchorText=anchorText.slice(0,anchorText.length-1);
$('campaign_deal_vendor_website_label').value=anchorText;
$('campaign_deal_vendor_website_url').value=attributesForInsertion['vendorURL'];
$('campaign_location_note').value=attributesForInsertion['redemptionAddress'];

/* color fields which need attention */
$('campaign_campaign_money_pledge_remit_to').style.color="black";
$('campaign_campaign_money_pledge_campaign_constraints_unit_buy_price').style.color="black";
if (launchDate.getDay()==5) {
	$('campaign_deadline_date_3i').style.backgroundColor='pink'; 
	$$('div.launch_date')[0].childNodes[1].innerHTML+=' <span style="color:red">Friday Deal!</span>'; };
if (launchDate.getDay()==6) {
	$('campaign_deadline_date_3i').style.backgroundColor='pink'; 
	$$('div.launch_date')[0].childNodes[1].innerHTML+=' <span style="color:red">Saturday Deal!</span>'; };
if (attributesForInsertion['division']==4 || attributesForInsertion['division']==6 ) {
	$('campaign_division_id').style.backgroundColor='pink';};
$('campaign_deadline_date_3i').onchange = function() { this.style.backgroundColor ="white";};
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
$('campaign_deal_vendor_website_label').style.backgroundColor='pink';
$('campaign_deal_vendor_website_label').onmouseover = function() { this.style.backgroundColor ="white";};
$('campaign_location_note').style.backgroundColor="pink";
$('campaign_location_note').setAttribute('onclick', 'this.style.backgroundColor="white"');

/* end color */

return null;
javascript: 

/* Paste ATTRIBUTESFORINSERTION object Here */

$('coupon_title').value=attributesForInsertion['dealTitle'];
$('coupon_condition_data').value=attributesForInsertion['conditions'];
$('coupon_instructions').value=attributesForInsertion['instructions']; 
$$('div.field.coupon_expires')[0].childNodes[0].innerHTML+=" " + attributesForInsertion['rawExpirationDate'] +"; launches on " + attributesForInsertion['featureDate'];
/* color fields which need attention */
$('coupon_title').style.backgroundColor='pink';
$('coupon_title').setAttribute('onclick', 'this.style.backgroundColor="white"');
$('coupon_subtitle').style.backgroundColor='pink';
$('coupon_subtitle').onmouseover = function() { this.style.backgroundColor ="white";};
$('coupon_expires_date_1i').style.backgroundColor='pink';
$('coupon_expires_date_1i').onmouseover = function() { this.style.backgroundColor ="white";};
$('coupon_expires_date_2i').style.backgroundColor='pink';
$('coupon_expires_date_2i').onmouseover = function() { this.style.backgroundColor ="white";};
$('coupon_expires_date_3i').style.backgroundColor='pink';
$('coupon_expires_date_3i').onmouseover = function() { this.style.backgroundColor ="white";};
$$('div.field.coupon_map')[0].style.backgroundColor='pink';
$$('div.field.coupon_map')[0].onmouseover = function() { this.style.backgroundColor ="white";};
$('coupon_condition_data').style.backgroundColor='pink';
$('coupon_condition_data').setAttribute('onclick', 'this.style.backgroundColor="white"');
$('coupon_instructions').style.backgroundColor='pink'; 
$('coupon_instructions').setAttribute('onclick', 'this.style.backgroundColor="white"'); return null;
/* end coupon page coloring */

/* end coupon page */
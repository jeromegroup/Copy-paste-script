javascript:

/* Insert ATTRIBUTESFORINSERTION here */

if ($('vendor_contact_params_new_permalink').value != "") {
	$('vendor_name').value=attributesForInsertion["vendorName"];
	$('vendor_address').value=attributesForInsertion["redemptionAddress"]; }
else {
	$('contact_full_name').value=attributesForInsertion["vendorName"];
	$('contact_full_name').style.backgroundColor="pink";
	$('contact_full_name').setAttribute('onclick', 'this.style.backgroundColor="white"');
	$('contact_email_address').value=attributesForInsertion["emailListTo"];
	var pass1 = attributesForInsertion["vendorName"].replace(/\s*/g,'') + "rocks" + Math.round(Math.random()*10);
	var pass2 = pass1.toLowerCase();
	$('contact_password').value=pass2;
	$('contact_password_confirmation').value=pass2;}; return null;
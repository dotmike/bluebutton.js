/**
 * BlueButton.js
 */

// v.0.0.8


(function () {
var Core=function(){var n=function(b){return{el:b,template:Core.template,tag:Core.tag,elsByTag:Core.elsByTag,attr:Core.attr,val:Core.val}},h=function(b){if(b.length){for(var e=[],a=0;a<b.length;a++)e.push(n(b[a]));return e}return n(b)},l=function(){var b=document.createElement("empty");return h(b)};return{parseXML:function(b){if(!b||"string"!==typeof b)return console.log("BB Error: XML data is not a string"),null;var e;if(window.DOMParser)parser=new DOMParser,e=parser.parseFromString(b,"text/xml");
else try{e=new ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(b)}catch(a){console.log("BB ActiveX Exception: Could not parse XML")}return!e||!e.documentElement||e.getElementsByTagName("parsererror").length?(console.log("BB Error: Could not parse XML"),null):h(e)},wrapElement:h,template:function(b){a:{for(var e=this.el,e=e.getElementsByTagName("templateId"),a=0;a<e.length;a++)if(e[a].getAttribute("root")===b){b=e[a];break a}b=void 0}return b?h(b.parentNode):l()},tag:function(b){return(b=
this.el.getElementsByTagName(b)[0])?h(b):l()},elsByTag:function(b){return h(this.el.getElementsByTagName(b))},attr:function(b){return!this.el?null:this.el.getAttribute(b)},val:function(){if(!this.el)return null;try{return this.el.childNodes[0].nodeValue}catch(b){return null}},parseDate:function(b){if(!b||"string"!==typeof b)return console.log("Error: date is not a string"),null;var e=b.substr(0,4),a=b.substr(4,2);b=b.substr(6,2);return new Date(e,a,b)}}}();var Allergies=function(){var n=Core.parseDate;return{process:function(h,l){var b,e=[];switch(l){case "ccda":b=[];var a,c,d;a=h.template("2.16.840.1.113883.10.20.22.2.6.1");c=a.elsByTag("entry");for(var f=0;f<c.length;f++){d=c[f];a=d.tag("effectiveTime");var g=n(a.tag("low").attr("value")),k=n(a.tag("high").attr("value"));a=d.template("2.16.840.1.113883.10.20.22.4.7").tag("code");var q=a.attr("displayName"),p=a.attr("code"),m=a.attr("codeSystem"),s=a.attr("codeSystemName");a=d.template("2.16.840.1.113883.10.20.22.4.7").tag("value");
var t=a.attr("displayName"),r=a.attr("code"),u=a.attr("codeSystem"),v=a.attr("codeSystemName");a=d.template("2.16.840.1.113883.10.20.22.4.9").tag("value");var w=a.attr("displayName"),x=a.attr("code"),z=a.attr("codeSystem");a=d.template("2.16.840.1.113883.10.20.22.4.8").tag("value");var A=a.attr("displayName");a=d.tag("participant").tag("code");var B=a.attr("displayName"),C=a.attr("code"),D=a.attr("codeSystem"),y=a.attr("codeSystemName");a=d.template("2.16.840.1.113883.10.20.22.4.28").tag("value");
a.attr("displayName");b.push({name:q,start_date:g,end_date:k,code:p,code_system:m,code_system_name:s,reaction_type_name:t,reaction_type_code:r,reaction_type_code_system:u,reaction_type_code_system_name:v,reaction_name:w,reaction_code:x,reaction_code_system:z,severity:A,allergen_name:B,allergen_code:C,allergen_code_system:D,allergen_code_system_name:y})}break;case "va_c32":b=[];a=h.template("2.16.840.1.113883.3.88.11.83.102");c=a.elsByTag("entry");for(f=0;f<c.length;f++)d=c[f],a=d.tag("effectiveTime"),
g=a.tag("low").attr("value"),k=a.tag("high").attr("value"),a=d.template("2.16.840.1.113883.10.20.1.28").tag("code"),q=a.tag("originalText").val(),p=a.attr("code"),m=a.attr("codeSystem"),s=a.attr("codeSystemName"),a=d.template("2.16.840.1.113883.10.20.1.54").tag("value"),t=a.attr("displayName"),r=a.attr("code"),u=a.attr("codeSystem"),v=a.attr("codeSystemName"),a=d.template("2.16.840.1.113883.10.20.1.54").tag("value"),w=a.attr("displayName"),x=a.attr("code"),z=a.attr("codeSystem"),a=d.template("2.16.840.1.113883.10.20.1.55").tag("value"),
A=a.attr("displayName"),a=d.tag("participant").tag("code"),B=d.tag("participant").tag("name").val(),C=a.attr("code"),D=a.attr("codeSystem"),y=a.attr("codeSystemName"),a=d.template("2.16.840.1.113883.10.20.22.4.28").tag("value"),a.attr("displayName"),b.push({name:q,start_date:g,end_date:k,code:p,code_system:m,code_system_name:s,reaction_type_name:t,reaction_type_code:r,reaction_type_code_system:u,reaction_type_code_system_name:v,reaction_name:w,reaction_code:x,reaction_code_system:z,severity:A,allergen_name:B,
allergen_code:C,allergen_code_system:D,allergen_code_system_name:y});break;case "json":return{}}for(a=0;a<b.length;a++)e.push({date_range:{start:b[a].start_date,end:b[a].end_date},name:b[a].name,code:b[a].code,code_system:b[a].code_system,code_system_name:b[a].code_system_name,status:b[a].status,severity:b[a].severity,reaction:{name:b[a].reaction_name,code:b[a].reaction_code,code_system:b[a].reaction_code_system},reaction_type:{name:b[a].reaction_type_name,code:b[a].reaction_type_code,code_system:b[a].reaction_code_system,
code_system_name:b[a].reaction_type_code_system_name},allergen:{name:b[a].allergen_name,code:b[a].allergen_code,code_system:b[a].allergen_code_system,code_system_name:b[a].allergen_code_system_name}});return e}}}();var Demographics=function(){var n=Core.parseDate;return{process:function(h,l){var b;switch(l){case "ccda":b={};var e,a,c;e=h.template("2.16.840.1.113883.10.20.22.1.1");c=e.tag("patientRole");e=c.tag("patient").tag("name");b.prefix=e.tag("prefix").val();a=e.elsByTag("given");b.given=[];for(var d=0;d<a.length;d++)b.given.push(a[d].val());b.family=e.tag("family").val();e=c.tag("patient");b.dob=n(e.tag("birthTime").attr("value"));b.gender=e.tag("administrativeGenderCode").attr("displayName");b.marital_status=
e.tag("maritalStatusCode").attr("displayName");e=c.tag("addr");a=e.elsByTag("streetAddressLine");b.street=[];for(d=0;d<a.length;d++)b.street.push(a[d].val());b.city=e.tag("city").val();b.state=e.tag("state").val();b.zip=e.tag("postalCode").val();b.country=e.tag("country").val();e=c.tag("telecom");b.home=e.attr("value");b.work=null;b.mobile=null;b.email=null;b.language=c.tag("languageCommunication").tag("languageCode").attr("code");b.race=c.tag("raceCode").attr("displayName");b.ethnicity=c.tag("ethnicGroupCode").attr("displayName");
b.religion=c.tag("religiousAffiliationCode").attr("displayName");e=c.tag("birthplace");b.birthplace_state=e.tag("state").val();b.birthplace_zip=e.tag("postalCode").val();b.birthplace_country=e.tag("country").val();e=c.tag("guardian");b.guardian_relationship=e.tag("code").attr("displayName");b.guardian_home=e.tag("telecom").attr("value");e=e.tag("guardianPerson");a=e.elsByTag("given");b.guardian_given=[];for(d=0;d<a.length;d++)b.guardian_given.push(a[d].val());b.guardian_family=e.tag("family").val();
e=c.tag("guardian").tag("addr");a=e.elsByTag("streetAddressLine");b.guardian_street=[];for(d=0;d<a.length;d++)b.guardian_street.push(a[d].val());b.guardian_city=e.tag("city").val();b.guardian_state=e.tag("state").val();b.guardian_zip=e.tag("postalCode").val();b.guardian_country=e.tag("country").val();e=c.tag("providerOrganization");b.provider_organization=e.tag("name").val();b.provider_phone=e.tag("telecom").attr("value");a=e.elsByTag("streetAddressLine");b.provider_street=[];for(d=0;d<a.length;d++)b.provider_street.push(a[d].val());
b.provider_city=e.tag("city").val();b.provider_state=e.tag("state").val();b.provider_zip=e.tag("postalCode").val();b.provider_country=e.tag("country").val();break;case "va_c32":b={};e=h.template("1.3.6.1.4.1.19376.1.5.3.1.1.1");c=e.tag("patientRole");e=c.tag("patient").tag("name");b.prefix=e.tag("prefix").val();a=e.elsByTag("given");b.given=[];for(d=0;d<a.length;d++)b.given.push(a[d].val());b.family=e.tag("family").val();e=c.tag("patient");b.dob=n(e.tag("birthTime").attr("value"));b.gender=e.tag("administrativeGenderCode").attr("displayName");
b.marital_status=e.tag("maritalStatusCode").attr("displayName");e=c.tag("addr");a=e.elsByTag("streetAddressLine");b.street=[];for(d=0;d<a.length;d++)b.street.push(a[d].val());b.city=e.tag("city").val();b.state=e.tag("state").val();b.zip=e.tag("postalCode").val();b.country=e.tag("country").val();e=c.tag("telecom");b.home=e.attr("value");b.work=null;b.mobile=null;b.email=null;b.language=c.tag("languageCommunication").tag("languageCode").attr("code");b.race=c.tag("raceCode").attr("displayName");b.ethnicity=
c.tag("ethnicGroupCode").attr("displayName");b.religion=c.tag("religiousAffiliationCode").attr("displayName");e=c.tag("birthplace");b.birthplace_state=e.tag("state").val();b.birthplace_zip=e.tag("postalCode").val();b.birthplace_country=e.tag("country").val();e=c.tag("guardian");b.guardian_relationship=e.tag("code").attr("displayName");b.guardian_home=e.tag("telecom").attr("value");e=e.tag("guardianPerson");a=e.elsByTag("given");b.guardian_given=[];for(d=0;d<a.length;d++)b.guardian_given.push(a[d].val());
b.guardian_family=e.tag("family").val();e=c.tag("guardian").tag("addr");a=e.elsByTag("streetAddressLine");b.guardian_street=[];for(d=0;d<a.length;d++)b.guardian_street.push(a[d].val());b.guardian_city=e.tag("city").val();b.guardian_state=e.tag("state").val();b.guardian_zip=e.tag("postalCode").val();b.guardian_country=e.tag("country").val();e=c.tag("providerOrganization");b.provider_organization=e.tag("name").val();b.provider_phone=e.tag("telecom").attr("value");a=e.elsByTag("streetAddressLine");b.provider_street=
[];for(d=0;d<a.length;d++)b.provider_street.push(a[d].val());b.provider_city=e.tag("city").val();b.provider_state=e.tag("state").val();b.provider_zip=e.tag("postalCode").val();b.provider_country=e.tag("country").val();break;case "json":return{}}return{name:{prefix:b.prefix,given:b.given,family:b.family},dob:b.dob,gender:b.gender,marital_status:b.marital_status,address:{street:b.street,city:b.city,state:b.state,zip:b.zip,country:b.country},phone:{home:b.home,work:b.work,mobile:b.mobile},email:b.email,
language:b.language,race:b.race,ethnicity:b.ethnicity,religion:b.religion,birthplace:{state:b.birthplace_state,zip:b.birthplace_zip,country:b.birthplace_country},guardian:{name:{given:b.guardian_given,family:b.guardian_family},relationship:b.guardian_relationship,address:{street:b.guardian_street,city:b.guardian_city,state:b.guardian_state,zip:b.guardian_zip,country:b.guardian_country},phone:{home:b.guardian_home}},provider:{organization:b.provider_organization,phone:b.provider_phone,address:{street:b.provider_street,
city:b.provider_city,state:b.provider_state,zip:b.provider_zip,country:b.provider_country}}}}}}();var Encounters=function(){var n=Core.parseDate;return{process:function(h,l){var b,e=[];switch(l){case "ccda":b=[];var a,c,d,f;a=h.template("2.16.840.1.113883.10.20.22.2.22.1");d=a.elsByTag("entry");for(var g=0;g<d.length;g++){f=d[g];var k=n(f.tag("effectiveTime").attr("value"));a=f.tag("code");var q=a.attr("displayName"),p=a.attr("code"),m=a.attr("codeSystem"),s=a.attr("codeSystemName"),t=a.attr("codeSystemVersion");a=f.tag("value");var r=a.attr("displayName"),u=a.attr("code"),v=a.attr("codeSystem");
a=f.tag("translation");var w=a.attr("displayName"),x=a.attr("code"),z=a.attr("codeSystem"),A=a.attr("codeSystemName");a=f.tag("performer").tag("code");var B=a.attr("displayName");a.attr("code");var C=a.attr("codeSystem"),D=a.attr("codeSystemName");a=f.tag("participant");f=a.tag("code").attr("displayName");c=a.elsByTag("streetAddressLine");street=[];for(var y=0;y<c.length;y++)street.push(c[y].val());c=a.tag("city").val();var y=a.tag("state").val(),E=a.tag("postalCode").val();a=a.tag("country").val();
b.push({date:k,name:q,code:p,code_system:m,code_system_name:s,code_system_version:t,finding_name:r,finding_code:u,finding_code_system:v,translation_name:w,translation_code:x,translation_code_system:z,translation_code_system_name:A,performer_name:B,performer_code_system:C,performer_code_system_name:D,organization:f,street:street,city:c,state:y,zip:E,country:a})}break;case "va_c32":b=[];a=h.template("2.16.840.1.113883.10.20.1.3");d=a.elsByTag("entry");for(g=0;g<d.length;g++){f=d[g];k=n(f.tag("effectiveTime").tag("low").attr("value"));
a=f.tag("code");q=a.attr("displayName");p=a.attr("code");m=a.attr("codeSystem");s=a.attr("codeSystemName");t=a.attr("codeSystemVersion");a=f.tag("value");r=a.attr("displayName");u=a.attr("code");v=a.attr("codeSystem");a=f.tag("translation");w=a.attr("displayName");x=a.attr("code");z=a.attr("codeSystem");A=a.attr("codeSystemName");a=f.tag("performer").tag("code");B=a.attr("displayName");a.attr("code");C=a.attr("codeSystem");D=a.attr("codeSystemName");a=f.tag("participant");f=a.tag("code").attr("displayName");
c=a.elsByTag("streetAddressLine");street=[];for(y=0;y<c.length;y++)street.push(c[y].val());c=a.tag("city").val();y=a.tag("state").val();E=a.tag("postalCode").val();a=a.tag("country").val();b.push({date:k,name:q,code:p,code_system:m,code_system_name:s,code_system_version:t,finding_name:r,finding_code:u,finding_code_system:v,translation_name:w,translation_code:x,translation_code_system:z,translation_code_system_name:A,performer_name:B,performer_code_system:C,performer_code_system_name:D,organization:f,
street:street,city:c,state:y,zip:E,country:a})}break;case "json":return{}}for(d=0;d<b.length;d++)e.push({date:b[d].date,name:b[d].name,code:b[d].code,code_system:b[d].code_system,code_system_name:b[d].code_system_name,code_system_version:b[d].code_system_version,finding:{name:b[d].finding_name,code:b[d].finding_code,code_system:b[d].finding_code_system},translation:{name:b[d].translation_name,code:b[d].translation_code,code_system:b[d].translation_code_system,code_system_name:b[d].translation_code_system_name},
performer:{name:b[d].performer_name,code:b[d].performer_code,code_system:b[d].performer_code_system,code_system_name:b[d].performer_code_system_name},location:{organization:b[d].organization,street:b[d].street,city:b[d].city,state:b[d].state,zip:b[d].zip,country:b[d].country}});return e}}}();var Immunizations=function(){var n=Core.parseDate;return{process:function(h,l){var b,e=[];switch(l){case "ccda":b=[];var a,c,d;a=h.template("2.16.840.1.113883.10.20.22.2.2");c=a.elsByTag("entry");for(var f=0;f<c.length;f++){d=c[f];a=d.tag("effectiveTime");var g=n(a.attr("value"));a=d.template("2.16.840.1.113883.10.20.22.4.54").tag("code");var k=a.attr("displayName"),q=a.attr("code"),p=a.attr("codeSystem"),m=a.attr("codeSystemName");a=d.template("2.16.840.1.113883.10.20.22.4.54").tag("translation");
var s=a.attr("displayName"),t=a.attr("code"),r=a.attr("codeSystem"),u=a.attr("codeSystemName");a=d.tag("routeCode");var v=a.attr("displayName"),w=a.attr("code"),x=a.attr("codeSystem"),z=a.attr("codeSystemName");a=d.template("2.16.840.1.113883.10.20.22.4.20");d=a.tag("text").val();a=a.tag("code");var A=a.attr("displayName"),B=a.attr("code");a=a.attr("codeSystem");b.push({date:g,product_name:k,product_code:q,product_code_system:p,product_code_system_name:m,translation_name:s,translation_code:t,translation_code_system:r,
translation_code_system_name:u,route_name:v,route_code:w,route_code_system:x,route_code_system_name:z,instructions_text:d,education_name:A,education_code:B,education_code_system:a})}break;case "va_c32":b=[];a=h.template("2.16.840.1.113883.10.20.1.6");c=a.elsByTag("entry");for(f=0;f<c.length;f++)d=c[f],a=d.tag("effectiveTime"),g=n(a.attr("value")),a=d.template("2.16.840.1.113883.10.20.1.53").tag("code"),k=a.attr("displayName"),q=a.attr("code"),p=a.attr("codeSystem"),m=a.attr("codeSystemName"),a=d.template("2.16.840.1.113883.10.20.22.4.54").tag("translation"),
s=a.attr("displayName"),t=a.attr("code"),r=a.attr("codeSystem"),u=a.attr("codeSystemName"),a=d.tag("routeCode"),v=a.attr("displayName"),w=a.attr("code"),x=a.attr("codeSystem"),z=a.attr("codeSystemName"),a=d.template("2.16.840.1.113883.10.20.22.4.20"),d=a.tag("text").val(),a=a.tag("code"),A=a.attr("displayName"),B=a.attr("code"),a=a.attr("codeSystem"),b.push({date:g,product_name:k,product_code:q,product_code_system:p,product_code_system_name:m,translation_name:s,translation_code:t,translation_code_system:r,
translation_code_system_name:u,route_name:v,route_code:w,route_code_system:x,route_code_system_name:z,instructions_text:d,education_name:A,education_code:B,education_code_system:a});break;case "json":return{}}for(c=0;c<b.length;c++)e.push({date:b[c].date,product:{name:b[c].product_name,code:b[c].product_code,code_system:b[c].product_code_system,code_system_name:b[c].product_code_system_name,translation:{name:b[c].translation_name,code:b[c].translation_code,code_system:b[c].translation_code_system,
code_system_name:b[c].translation_code_system_name}},route:{name:b[c].route_name,code:b[c].route_code,code_system:b[c].route_code_system,code_system_name:b[c].route_code_system_name},instructions:b[c].instructions_text,education_type:{name:b[c].education_name,code:b[c].education_code,code_system:b[c].education_code_system}});return e}}}();var Labs=function(){var n=Core.parseDate;return{process:function(h,l){var b,e=[];switch(l){case "ccda":b=[];var a=[],c,d,f,g;c=h.template("2.16.840.1.113883.10.20.22.2.3.1");d=c.elsByTag("entry");for(var k=0;k<d.length;k++){f=d[k];c=f.tag("code");var q=c.attr("displayName"),p=c.attr("code"),m=c.attr("codeSystem"),s=c.attr("codeSystemName");f=f.elsByTag("component");for(var t=0;t<f.length;t++){g=f[t];var r=n(g.tag("effectiveTime").attr("value"));c=g.tag("code");var u=c.attr("displayName"),v=c.attr("code"),
w=c.attr("codeSystem"),x=c.attr("codeSystemName");c=g.tag("value");g=c.attr("value");c=c.attr("unit");reference_high=reference_low=null;a.push({date:r,name:u,value:g,unit:c,code:v,code_system:w,code_system_name:x,reference_low:reference_low,reference_high:reference_high})}b.push({name:q,code:p,code_system:m,code_system_name:s,results:a})}break;case "va_c32":b=[];a=[];c=h.template("2.16.840.1.113883.10.20.1.14");d=c.elsByTag("entry");for(k=0;k<d.length;k++){f=d[k];c=f.tag("code");q=c.attr("displayName");
p=c.attr("code");m=c.attr("codeSystem");s=c.attr("codeSystemName");f=f.elsByTag("component");for(t=0;t<f.length;t++)g=f[t],r=n(g.tag("effectiveTime").attr("value")),c=g.tag("code"),u=c.tag("originalText").val(),v=c.attr("code"),w=c.attr("codeSystem"),x=c.attr("codeSystemName"),c=g.tag("value"),g=c.attr("value"),c=c.attr("unit"),reference_high=reference_low=null,a.push({date:r,name:u,value:g,unit:c,code:v,code_system:w,code_system_name:x,reference_low:reference_low,reference_high:reference_high});
b.push({name:q,code:p,code_system:m,code_system_name:s,results:a})}break;case "json":return{}}for(a=0;a<b.length;a++){d=b[a];k={name:d.name,code:d.code,code_system:d.code_system,code_system_name:d.code_system_name};q=[];for(p=0;p<d.results.length;p++)m=d.results[p],q.push({date:m.date,name:m.name,value:m.value,unit:m.unit,code:m.code,code_system:m.code_system,code_system_name:m.code_system_name,reference:{low:m.reference_low,high:m.reference_high}});k.results=q;e.push(k)}return e}}}();var Medications=function(){var n=Core.parseDate;return{process:function(h,l){var b,e=[];switch(l){case "ccda":b=[];var a,c,d;a=h.template("2.16.840.1.113883.10.20.22.2.1.1");c=a.elsByTag("entry");for(var f=0;f<c.length;f++){d=c[f];a=d.tag("effectiveTime");var g=n(a.tag("low").attr("value")),k=n(a.tag("high").attr("value"));a=d.tag("manufacturedProduct").tag("code");var q=a.attr("displayName"),p=a.attr("code"),m=a.attr("codeSystem");a=d.tag("manufacturedProduct").tag("translation");var s=a.attr("displayName"),
t=a.attr("code"),r=a.attr("codeSystem"),u=a.attr("codeSystemName");a=d.tag("doseQuantity");var v=a.attr("value"),w=a.attr("unit");a=d.tag("rateQuantity");var x=a.attr("value"),z=a.attr("unit");a=d.tag("precondition").tag("value");var A=a.attr("displayName"),B=a.attr("code"),C=a.attr("codeSystem");a=d.template("2.16.840.1.113883.10.20.22.4.19").tag("value");var D=a.attr("displayName"),y=a.attr("code"),E=a.attr("codeSystem");a=d.tag("routeCode");var F=a.attr("displayName"),G=a.attr("code"),H=a.attr("codeSystem"),
I=a.attr("codeSystemName");a=d.tag("participant").tag("code");var J=a.attr("displayName"),K=a.attr("code"),L=a.attr("codeSystem"),M=a.attr("codeSystemName");a=d.tag("administrationUnitCode");var N=a.attr("displayName"),O=a.attr("code"),P=a.attr("codeSystem"),Q=a.attr("codeSystemName");a=d.tag("performer");a=a.tag("name").val();b.push({start_date:g,end_date:k,product_name:q,product_code:p,product_code_system:m,translation_name:s,translation_code:t,translation_code_system:r,translation_code_system_name:u,
dose_value:v,dose_unit:w,rate_quantity_value:x,rate_quantity_unit:z,precondition_name:A,precondition_code:B,precondition_code_system:C,reason_name:D,reason_code:y,reason_code_system:E,route_name:F,route_code:G,route_code_system:H,route_code_system_name:I,vehicle_name:J,vehicle_code:K,vehicle_code_system:L,vehicle_code_system_name:M,administration_name:N,administration_code:O,administration_code_system:P,administration_code_system_name:Q,prescriber_organization:a,prescriber_person:null})}break;case "va_c32":b=
[];a=h.template("2.16.840.1.113883.3.88.11.83.112");c=a.elsByTag("entry");for(f=0;f<c.length;f++)d=c[f],a=d.tag("effectiveTime"),g=n(a.tag("low").attr("value")),k=n(a.tag("high").attr("value")),a=d.tag("manufacturedProduct").tag("code"),q=a.attr("displayName"),p=a.attr("code"),m=a.attr("codeSystem"),a=d.tag("manufacturedProduct").tag("translation"),s=a.attr("displayName"),t=a.attr("code"),r=a.attr("codeSystem"),u=a.attr("codeSystemName"),a=d.tag("doseQuantity"),v=a.attr("value"),w=a.attr("unit"),
a=d.tag("rateQuantity"),x=a.attr("value"),z=a.attr("unit"),a=d.tag("precondition").tag("value"),A=a.attr("displayName"),B=a.attr("code"),C=a.attr("codeSystem"),a=d.template("2.16.840.1.113883.10.20.22.4.19").tag("value"),D=a.attr("displayName"),y=a.attr("code"),E=a.attr("codeSystem"),a=d.tag("routeCode"),F=a.attr("displayName"),G=a.attr("code"),H=a.attr("codeSystem"),I=a.attr("codeSystemName"),a=d.tag("participant").tag("code"),J=a.attr("displayName"),K=a.attr("code"),L=a.attr("codeSystem"),M=a.attr("codeSystemName"),
a=d.tag("administrationUnitCode"),N=a.attr("displayName"),O=a.attr("code"),P=a.attr("codeSystem"),Q=a.attr("codeSystemName"),a=d.tag("performer"),a=a.tag("name").val(),b.push({start_date:g,end_date:k,product_name:q,product_code:p,product_code_system:m,translation_name:s,translation_code:t,translation_code_system:r,translation_code_system_name:u,dose_value:v,dose_unit:w,rate_quantity_value:x,rate_quantity_unit:z,precondition_name:A,precondition_code:B,precondition_code_system:C,reason_name:D,reason_code:y,
reason_code_system:E,route_name:F,route_code:G,route_code_system:H,route_code_system_name:I,vehicle_name:J,vehicle_code:K,vehicle_code_system:L,vehicle_code_system_name:M,administration_name:N,administration_code:O,administration_code_system:P,administration_code_system_name:Q,prescriber_organization:a,prescriber_person:null});break;case "json":return{}}for(c=0;c<b.length;c++)e.push({date_range:{start:b[c].start_date,end:b[c].end_date},product:{name:b[c].product_name,code:b[c].product_code,code_system:b[c].product_code_system,
translation:{name:b[c].translation_name,code:b[c].translation_code,code_system:b[c].translation_code_system,code_system_name:b[c].translation_code_system_name}},dose_quantity:{value:b[c].dose_value,unit:b[c].dose_unit},rate_quantity:{value:b[c].rate_quantity_value,unit:b[c].rate_quantity_unit},precondition:{name:b[c].precondition_name,code:b[c].precondition_code,code_system:b[c].precondition_code_system},reason:{name:b[c].reason_name,code:b[c].reason_code,code_system:b[c].reason_code_system},route:{name:b[c].route_name,
code:b[c].route_code,code_system:b[c].route_code_system,code_system_name:b[c].route_code_system_name},vehicle:{name:b[c].vehicle_name,code:b[c].vehicle_code,code_system:b[c].vehicle_code_system,code_system_name:b[c].vehicle_code_system_name},administration:{name:b[c].administration_name,code:b[c].administration_code,code_system:b[c].administration_code_system,code_system_name:b[c].administration_code_system_name},prescriber:{organization:b[c].prescriber_organization,person:b[c].prescriber_person}});
return e}}}();var Problems=function(){var n=Core.parseDate;return{process:function(h,l){var b,e=[];switch(l){case "ccda":b=[];var a,c,d;a=h.template("2.16.840.1.113883.10.20.22.2.5");c=a.elsByTag("entry");for(var f=0;f<c.length;f++){d=c[f];a=d.tag("effectiveTime");var g=n(a.tag("low").attr("value")),k=n(a.tag("high").attr("value"));a=d.template("2.16.840.1.113883.10.20.22.4.4").tag("code");var q=a.attr("displayName"),p=a.attr("code"),m=a.attr("codeSystem");a=d.template("2.16.840.1.113883.10.20.22.4.6");var s=a.tag("value").attr("displayName");
a=d.template("2.16.840.1.113883.10.20.22.4.31");a=parseInt(a.tag("value").attr("value"));b.push({start_date:g,end_date:k,name:q,code:p,code_system:m,status:s,age:a})}break;case "va_c32":b=[];a=h.template("2.16.840.1.113883.10.20.1.11");c=a.elsByTag("entry");for(f=0;f<c.length;f++)d=c[f],a=d.tag("effectiveTime"),g=n(a.tag("low").attr("value")),k=n(a.tag("high").attr("value")),a=d.template("2.16.840.1.113883.10.20.1.28").tag("code"),q=a.tag("originalText").val(),p=a.attr("code"),m=a.attr("codeSystem"),
a=d.template("2.16.840.1.113883.10.20.22.4.6"),s=a.tag("value").attr("displayName"),a=d.template("2.16.840.1.113883.10.20.22.4.31"),a=parseInt(a.tag("value").attr("value")),b.push({start_date:g,end_date:k,name:q,code:p,code_system:m,status:s,age:a});break;case "json":return{}}for(c=0;c<b.length;c++)e.push({date_range:{start:b[c].start_date,end:b[c].end_date},name:b[c].name,status:b[c].status,age:b[c].age,code:b[c].code,code_system:b[c].code_system});return e}}}();var Procedures=function(){var n=Core.parseDate;return{process:function(h,l){var b,e=[];switch(l){case "ccda":b=[];var a,c,d,f;a=h.template("2.16.840.1.113883.10.20.22.2.7");d=a.elsByTag("entry");for(var g=0;g<d.length;g++){f=d[g];a=f.tag("effectiveTime");var k=n(a.attr("value"));a=f.tag("code");var q=a.attr("displayName"),p=a.attr("code"),m=a.attr("codeSystem");a=f.tag("performer").tag("addr");var s=a.tag("name").val(),t=a.tag("telecom").attr("value");c=a.elsByTag("streetAddressLine");street=[];for(var r=
0;r<c.length;r++)street.push(c[r].val());c=a.tag("city").val();var r=a.tag("state").val(),u=a.tag("postalCode").val(),v=a.tag("country").val();a=f.tag("participant").tag("code");f=a.attr("displayName");var w=a.attr("code");a=a.attr("codeSystem");b.push({date:k,name:q,code:p,code_system:m,specimen_name:null,specimen_code:null,specimen_code_system:null,organization:s,phone:t,street:street,city:c,state:r,zip:u,country:v,device_name:f,device_code:w,device_code_system:a})}break;case "va_c32":b=[];a=h.template("2.16.840.1.113883.10.20.1.12");
d=a.elsByTag("entry");for(g=0;g<d.length;g++){f=d[g];a=f.tag("effectiveTime");k=n(a.tag("low").attr("value"));a=f.tag("code");q=a.tag("originalText").val();p=a.attr("code");m=a.attr("codeSystem");a=f.tag("performer").tag("addr");s=a.tag("name").val();t=a.tag("telecom").attr("value");c=a.elsByTag("streetAddressLine");street=[];for(r=0;r<c.length;r++)street.push(c[r].val());c=a.tag("city").val();r=a.tag("state").val();u=a.tag("postalCode").val();v=a.tag("country").val();a=f.tag("participant").tag("code");
f=a.attr("displayName");w=a.attr("code");a=a.attr("codeSystem");b.push({date:k,name:q,code:p,code_system:m,specimen_name:null,specimen_code:null,specimen_code_system:null,organization:s,phone:t,street:street,city:c,state:r,zip:u,country:v,device_name:f,device_code:w,device_code_system:a})}break;case "json":return{}}for(d=0;d<b.length;d++)e.push({date:b[d].date,name:b[d].name,code:b[d].code,code_system:b[d].code_system,specimen:{name:b[d].specimen_name,code:b[d].specimen_code,code_system:b[d].specimen_code_system},
performer:{organization:b[d].organization,street:b[d].street,city:b[d].city,state:b[d].state,zip:b[d].zip,country:b[d].country,phone:b[d].phone},device:{name:b[d].device_name,code:b[d].device_code,code_system:b[d].device_code_system}});return e}}}();var Vitals=function(){var n=Core.parseDate;return{process:function(h,l){var b,e=[];switch(l){case "ccda":b=[];var a=[],c,d,f,g;c=h.template("2.16.840.1.113883.10.20.22.2.4.1");d=c.elsByTag("entry");for(var k=0;k<d.length;k++){f=d[k];c=f.tag("effectiveTime");var q=n(c.attr("value"));f=f.elsByTag("component");for(var p=0;p<f.length;p++){g=f[p];c=g.tag("code");var m=c.attr("displayName"),s=c.attr("code"),t=c.attr("codeSystem"),r=c.attr("codeSystemName");c=g.tag("value");g=parseInt(c.attr("value"));c=
c.attr("unit");a.push({name:m,code:s,code_system:t,code_system_name:r,value:g,unit:c})}b.push({date:q,results:a})}break;case "va_c32":b=[];a=[];c=h.template("2.16.840.1.113883.10.20.1.16");d=c.elsByTag("entry");for(k=0;k<d.length;k++){f=d[k];c=f.tag("effectiveTime");q=n(c.attr("value"));f=f.elsByTag("component");for(p=0;p<f.length;p++)g=f[p],c=g.tag("code"),m=c.attr("displayName"),s=c.attr("code"),t=c.attr("codeSystem"),r=c.attr("codeSystemName"),c=g.tag("value"),g=parseInt(c.attr("value")),c=c.attr("unit"),
a.push({name:m,code:s,code_system:t,code_system_name:r,value:g,unit:c});b.push({date:q,results:a})}break;case "json":return{}}for(a=0;a<b.length;a++){d=b[a];k={date:d.date};q=[];for(c=0;c<d.results.length;c++)f=d.results[c],q.push({name:f.name,code:f.code,code_system:f.code_system,code_system_name:f.code_system_name,value:f.value,unit:f.unit});k.results=q;e.push(k)}return e}}}();var BlueButton=function(n){var h=null,l="",b={},e=function(a){for(var b=0;b<a.length;b++)a[b].json=function(){return JSON.stringify(this,null,2)}};n=n.replace(/^\s+|\s+$/g,"");if("<?xml"==n.substr(0,5))h=Core.parseXML(n),l="empty"==h.template("1.3.6.1.4.1.19376.1.5.3.1.1.1").el.tagName.toLowerCase()?"ccda":"va_c32",b.document={type:l},b.allergies=Allergies.process(h,l),b.demographics=Demographics.process(h,l),b.encounters=Encounters.process(h,l),b.immunizations=Immunizations.process(h,l),b.labs=Labs.process(h,
l),b.medications=Medications.process(h,l),b.problems=Problems.process(h,l),b.procedures=Procedures.process(h,l),b.vitals=Vitals.process(h,l),e([b,b.document,b.allergies,b.demographics,b.encounters,b.immunizations,b.labs,b.medications,b.problems,b.procedures,b.vitals]);else{l="json";try{var a=JSON.parse(n)}catch(c){console.log("BB Exception: Could not parse JSON")}b.document={type:l};b.allergies=Allergies.process(a,l);b.demographics=Demographics.process(a,l);b.encounters=Encounters.process(a,l);b.immunizations=
Immunizations.process(a,l);b.labs=Labs.process(a,l);b.medications=Medications.process(a,l);b.problems=Problems.process(a,l);b.procedures=Procedures.process(a,l);b.vitals=Vitals.process(a,l)}return{data:b,xmlDOM:h,document:function(){return b.document},allergies:function(){return b.allergies},demographics:function(){return b.demographics},encounters:function(){return b.encounters},immunizations:function(){return b.immunizations},labs:function(){return b.labs},medications:function(){return b.medications},
problems:function(){return b.problems},procedures:function(){return b.procedures},vitals:function(){return b.vitals}}};window.BlueButton=BlueButton;
})();

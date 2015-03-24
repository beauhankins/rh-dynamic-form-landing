//= require_tree .

$(document).ready(function () {
  // Gated Form
  
  window.DynamicFormConfig = {
    showAdditionalFields: [ 'Additional Information'],
    no_offer: true,
    offer_id: '70160000000dnSvAAI',
    no_tactic: true,
    FormIntro: "<h2>Register Now</h2><p>Thank you for your interest.</p>",
    FormCallToAction: "Submit",
    ThanksTitle: "Thank You",
    ThanksCallToAction: "",
    ThanksText: "<p>Thank you for contacting Red Hat. Your information has been submitted successfully!</p>",
    ThanksButton: false,
    no_css: true,
    no_auto: true
  };
  
  var form_js = document.createElement("script");
  form_js.type = "text/javascript";
  form_js.src = "//www.redhat.com/forms/scripts/jquery.gatedform.js";
  document.getElementsByTagName("body")[0].appendChild(form_js);
});
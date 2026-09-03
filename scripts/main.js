/* Hill View Cottage — interactions + enquiry */
(function () {
  "use strict";
  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var yearEl = document.getElementById("year");

  function onScroll(){ if(header) header.classList.toggle("scrolled", window.scrollY>10); }
  window.addEventListener("scroll", onScroll, {passive:true}); onScroll();

  if(navToggle && header){
    navToggle.addEventListener("click", function(){
      var open = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open?"Close menu":"Open menu");
    });
    header.querySelectorAll(".site-nav a").forEach(function(l){
      l.addEventListener("click", function(){ header.classList.remove("nav-open"); navToggle.setAttribute("aria-expanded","false");});
    });
  }

  var reveals = document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(ents){
      ents.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} });
    },{threshold:0.12, rootMargin:"0px 0px -40px 0px"});
    reveals.forEach(function(el){ io.observe(el); });
  } else { reveals.forEach(function(el){ el.classList.add("in");}); }

  if(yearEl) yearEl.textContent=new Date().getFullYear();

  // Enquiry -> WhatsApp (no backend)
  var form=document.getElementById("enquiryForm");
  var status=document.getElementById("formStatus");
  if(form){
    // set min date today
    var d=form.querySelector('input[name="checkin"]');
    if(d){ var t=new Date(); t.setMinutes(t.getMinutes()-t.getTimezoneOffset()); d.min=t.toISOString().slice(0,10); }
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var fd=new FormData(form);
      var name=(fd.get("name")||"").toString().trim();
      var phone=(fd.get("phone")||"").toString().trim();
      var checkin=(fd.get("checkin")||"").toString().trim();
      var guests=(fd.get("guests")||"").toString().trim();
      var msg=(fd.get("message")||"").toString().trim();
      if(!name || !phone || !checkin){ if(status) status.textContent="Please fill name, phone and check-in date."; return; }
      if(!/^\+?[0-9\s-]{8,15}$/.test(phone)){ if(status) status.textContent="Enter a valid phone number."; return; }
      var text="Hi HVC Team, enquiry for Hill View Cottage:\nName: "+name+"\nPhone: "+phone+"\nCheck-in: "+checkin+"\nGuests: "+guests+"\nMessage: "+(msg||"-");
      var url="https://wa.me/919876543210?text="+encodeURIComponent(text);
      if(status) status.textContent="Opening WhatsApp…";
      window.open(url,"_blank","noopener");
    });
  }
})();

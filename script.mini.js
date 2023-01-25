const shownServices=document.getElementById("shown-services"),prevServicesBtn=document.getElementById("prev-btn-services"),nextServicesBtn=document.getElementById("next-btn-services"),partnersContainer=document.getElementById("partners-container"),applicationsContainer=document.getElementById("applications-container"),shownFeedback=document.getElementById("shown-feedback"),prevFeedbackBtn=document.getElementById("prev-btn-feedback"),nextFeedbackBtn=document.getElementById("next-btn-feedback"),contactForm=document.getElementById("contact-form"),submitBtn=document.getElementById("submit-btn"),textHighlight=document.querySelectorAll("mark"),isMobile=window.matchMedia("only screen and (max-width: 760px)").matches;textHighlight.forEach(e=>{let t=new IntersectionObserver(t=>{!0===t[0].isIntersecting&&(e.style.backgroundPosition="0 0")},{threshold:[1]});t.observe(e)});let servicesIndex=0;const maxServices=isMobile?services.length-1:3,indexJump=isMobile?1:3;prevServicesBtn.addEventListener("click",()=>{0===servicesIndex?servicesIndex=maxServices:servicesIndex-=indexJump,servicesSlider()}),nextServicesBtn.addEventListener("click",()=>{servicesIndex>=maxServices?servicesIndex=0:servicesIndex+=indexJump,servicesSlider()}),servicesSlider=()=>{shownServices.innerHTML="",Array.from({length:isMobile?1:maxServices},(e,t)=>{shownServices.appendChild(createServiceElement(servicesIndex+t)).classList.add("service")})},createServiceElement=e=>{let t=document.createElement("div"),n=createServiceImg(e),s=createServiceName(e),i=createServiceDescription(e);if(t.appendChild(n),t.appendChild(s),t.appendChild(i),services[e].site){let a=createServiceLink(e);t.appendChild(a)}return t},createServiceImg=e=>{let t=document.createElement("div");t.className="service-img-container";let n=document.createElement("img");return n.src=services[e].img,n.alt=services[e].name,n.className="service-img",t.appendChild(n),n},createServiceName=e=>{let t=document.createElement("h3");return t.innerText=services[e].name,t},createServiceDescription=e=>{let t=document.createElement("p");return t.innerText=services[e].description,t},createServiceLink=e=>{let t=document.createElement("a");return t.href=services[e].site,t.target="_blank",t.innerText="Site",t};const toggleContent=(e,t)=>{let n=document.querySelector(".show");n&&n!==e&&(n.classList.remove("show"),n.parentElement.children[0].classList.remove("selected"),n.classList.add("hide")),e.className.includes("hide")?(e.classList.remove("hide"),e.classList.add("show"),t.classList.add("selected")):(e.classList.remove("show"),e.classList.add("hide"),t.classList.remove("selected"))},createApplications=()=>{applications.forEach(e=>{let t=document.createElement("div");t.className="card-parent";let n=document.createElement("div");n.className="card",n.innerHTML=`<p>${e.name}</p>
      <p>&plus;</p>`;let s=document.createElement("div");if(s.className="hide app-images-container",e.content.forEach(e=>{let t=document.createElement("div");t.className="item-card",t.innerHTML=`
        <img src=${e.img} alt=${e.text} />
        <p>${e.text}</p>
      `,s.append(t)}),s.addEventListener("mousedown",e=>mouseDownHandler(e,s)),n.addEventListener("click",()=>toggleContent(s,n)),t.append(n),t.append(s),applicationsContainer.append(t),!isMobile){let i=applicationsContainer.children.length;[2,5,8,11].includes(i)&&(s.style.right="21.6vw"),[3,6,9].includes(i)&&(s.style.right="43.1vw")}})};let feedbackIndex=0;const maxFeedback=customerFeedback.length-1;function feedbackSlider(){shownFeedback.innerHTML=`
    <p>${isMobile?customerFeedback[feedbackIndex].mobile:customerFeedback[feedbackIndex].feedback}</p>
    <h3 class="feedback-name">${customerFeedback[feedbackIndex].name}</h3>
  `}prevFeedbackBtn.addEventListener("click",()=>{0===feedbackIndex?feedbackIndex=maxFeedback:feedbackIndex-=1,feedbackSlider()}),nextFeedbackBtn.addEventListener("click",()=>{feedbackIndex===maxFeedback?feedbackIndex=0:feedbackIndex+=1,feedbackSlider()});const formChange=()=>{let e=document.getElementById("input-name").value,t=document.getElementById("input-email").value,n=document.getElementById("input-message").value,s=/\w+@\w+.com/,i=s.test(t);submitBtn.disabled=!(e.length>0&&i&&n.length>0)};contactForm.addEventListener("keyup",formChange),submitBtn.addEventListener("click",()=>alert("Mensagem enviada!"));let pos={top:0,x:0},isDown=!1;const mouseDownHandler=function(e,t){pos={left:t.scrollLeft,x:e.clientX},isDown=!0,t.style.cursor="grabbing",t.style.userSelect="none",t.addEventListener("mouseup",()=>mouseUpHandler(t)),t.addEventListener("mousemove",e=>mouseMoveHandler(e,t)),t.parentElement.addEventListener("mouseout",e=>{"applications-container"===e.toElement.id&&mouseUpHandler(t)})},mouseMoveHandler=function(e,t){if(!isDown)return;let n=e.clientX-pos.x;t.scrollLeft=pos.left-n},mouseUpHandler=function(e){isDown=!1,e.removeEventListener("mousemove",t=>mouseMoveHandler(t,e)),e.style.cursor="grab",e.style.removeProperty("user-select")};if(isMobile){let e=document.getElementById("mobile-menu-icon"),t=document.getElementById("nav-bar");e.addEventListener("click",()=>{t.classList.contains("move-in")?(t.classList.remove("move-in"),t.classList.add("move-out"),e.classList.remove("menu-open"),e.classList.add("menu-close"),e.innerHTML="&#x2630;"):(t.classList.remove("move-out"),t.classList.add("move-in"),e.classList.remove("menu-close"),e.classList.add("menu-open"),e.innerHTML="&#x2715;")})}window.onload=()=>{feedbackSlider(),servicesSlider(),createApplications()};
const a={email:"",message:""},t={form:document.querySelector(".feedback-form")},m=JSON.parse(localStorage.getItem("feedback-form-state"));m&&(t.form.elements.email.value=m.email??"",t.form.elements.message.value=m.message??"");t.form.addEventListener("input",n);t.form.addEventListener("submit",l);function n(e){const s=e.currentTarget.elements.email.value,r=e.currentTarget.elements.message.value;a.email=s,a.message=r,localStorage.setItem("feedback-form-state",JSON.stringify(a))}function l(e){e.preventDefault();const s=e.currentTarget.elements.email.value,r=e.currentTarget.elements.message.value;if(s===""||r==="")return alert("Fill please all fields");console.log(a),localStorage.removeItem("feedback-form-state"),t.form.reset()}
//# sourceMappingURL=2-form-7e1dd632.js.map

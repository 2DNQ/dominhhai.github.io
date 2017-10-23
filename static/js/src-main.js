$('#language').on('change', function() {
  window.location.pathname = window.location.pathname.replace(/\/(.*?)\//i, '/'+ $(this).val() +'/')
})
renderMathInElement(document.body, {delimiters:[
  {left: "$$", right: "$$", display: true},
  {left: "\\[", right: "\\]", display: true},
  {left: "$", right: "$", display: false},
  {left: "\\(", right: "\\)", display: false}
 ]})
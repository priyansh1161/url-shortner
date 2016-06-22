# url-shortner
<h1>API : URL SHORTNER .<a href="https://github.com/priyansh1161/url-shortner.git"><i class="fa fa-github" aria-hidden="true"></i></a></h1><p><b> USE :</b> When you Pass a link to /api of this page then a JSON object will be returned.
This object will have two prop <b>org link</b> and <b> shot link </b>
you can acess your short link at /{{your link}}.
<em>Enough Talking</em> lets show you some Examples.</p><br><h3>Example :</h3><code>https://urlshrt.herokuapp.com/api/http://google.com</code><p>will return output :</p><blockquote>{
"orgLink":"https://google.com",<br>
"shotlink":"https://urlshrt.herokuapp.com/1"<br>
}</blockquote><code>https://urlshrt.herokuapp.com/api/sjkjk</code><p>will return error :</p><blockquote>{
  'err' : 'requested type not a url'
}</blockquote><h2>To use the shortlinks make a request to https://urlshrt.herokuapp.com .</h2><code>loclhost:3000/1</code><p>will redriect to https://www.google.com</p><br><p class="col">However any request to root page that is not in database will redirect you back to https://urlshrt.herokuapp.com</p></div><div class="footer"><p class="foot">Copyrights &copy; 2016. MIT licence.</p></div></body></html>

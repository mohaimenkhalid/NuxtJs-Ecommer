<template>
  <div>
    <footer class="footer-section mt-5" style="background-image: url(../../assets/images/footer.jpg)">
      <v-container>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <nuxt-link to="/">
                    <img src="../../assets/images/logo.png"
                         class="img-fluid" alt="logo" /></nuxt-link>
                </div>
                <div class="footer-text">
                  Company about
                </div>
                <div class="footer-social-icon">
                  <span>Follow us</span>
                  <a href="" target="_blank">
                    <i class="fa fa-facebook facebook-bg" />
                  </a>
                  <a href="" target="_blank">
                    <i class="fa fa-twitter twitter-bg" />
                  </a>
                  <a href="" target="_blank">
                    <i class="fa fa-google-plus google-bg" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Useful nuxt-links</h3>
                </div>
                <ul>
                  <li><nuxt-link to="/">Home</nuxt-link></li>
                  <li><nuxt-link to="/about">about</nuxt-link></li>
                  <li><nuxt-link to="/contact-us">Contact Us</nuxt-link></li>
                  <li><nuxt-link to="/terms-condition">Terms & Condition</nuxt-link></li>
                  <li><nuxt-link to="privacy-policy">Privacy Policy</nuxt-link></li>
                  <li><nuxt-link to="delivery-notice">Delivery Notice</nuxt-link></li>
                  <li><nuxt-link to="purchase-guide">Purchase Guide</nuxt-link></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-container>
      <div class="copyright-area">
       <v-container>
         <v-row>
           <v-col cols="4" >
             <div class="copyright-text">
               <p>Copyright &copy; 2018, All Right Reserved <a
                 href="#">mohaimen</a></p>
             </div>
           </v-col>
           <v-col cols="8" class=" text-right">
             <div class="footer-menu">
               <ul>
                 <li><nuxt-link to="/">Home</nuxt-link></li>
                 <li><nuxt-link to="/terms-condition">Terms & Condition</nuxt-link></li>
                 <li><nuxt-link to="/purchase-guide">Purchase Guide</nuxt-link></li>
                 <li><nuxt-link to="/delivery-notice">Delivery Notice</nuxt-link></li>
                 <li><nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link></li>
                 <li><nuxt-link to="/about">About</nuxt-link></li>
                 <li><nuxt-link to="/contact-us">Contact</nuxt-link></li>
               </ul>
             </div>
           </v-col>
         </v-row>
       </v-container>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>
ul {
  margin: 0px;
  padding: 0px;
}
.footer-section {
  background: #151414;
  position: relative;
  background: url(https://spacingtech.com/html/vegist-final/vegist/image/footer-5.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 0;
}
.footer-cta {
  border-bottom: 1px solid #373636;
}
.single-cta i {
  color: #ff5e14;
  font-size: 30px;
  float: left;
  margin-top: 8px;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: #757575;
  font-size: 15px;
}
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
  max-width: 200px;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
  color: #000000;
  line-height: 28px;
}
.footer-social-icon span {
  color: #000000;
  display: block;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: #fff;
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}
.facebook-bg{
  background: #3B5998;
}
.twitter-bg{
  background: #55ACEE;
}
.google-bg{
  background: #DD4B39;
}
.footer-widget-heading h3 {
  color: #ff686e;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: #ff5e14;
}
.footer-widget ul li {
  display: inline-block;
  float: left;
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li a:hover{
  color: #ff5e14;
}
.footer-widget ul li a {
  color: #000000;
  text-transform: capitalize;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
}
.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: #ffffff;
  border: 1px solid #fdd670;
  color: #000;
}
.subscribe-form button {
  position: absolute;
  right: 0;
  background: #fdd670;
  padding: 13px 20px;
  border: 1px solid #fdd670;
  top: 1px;
}
.subscribe-form button i {
  color: #fff;
  font-size: 22px;
  transform: rotate(-6deg);
}
.copyright-area{
  background: #e6e6e6;
  padding: 25px 0;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: #878787;
}
.copyright-text p a{
  color: #ff5e14;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a{
  color: #ff5e14;
}
.footer-menu li a {
  font-size: 14px;
  color: #878787;
}

</style>

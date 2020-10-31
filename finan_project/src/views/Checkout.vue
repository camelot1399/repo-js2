<template>
  <div>
    <Breadcrumb />

    <section class="chechout center">
       
      <div class="chechout__box">
          
          <ul class="chechout__ul">
              <li class="chechout__ul_item">
                  <details class="chechout__box_details" open>
                      <summary class="chechout__ul_summary">01.   Shipping Adress</summary>
                      <div class="chechout__ul_box">
                          <div class="chechout__ul_block">
                              <form action="#" id="chechout__ul_box_form" class="">
                              <div class="chechout__ul_box_form_header">Check as a guest or register</div>
                              <div class="chechout__ul_box_form_text">Register with us for future convenience</div>
                              
                              <div class="chechout__ul_block_radioBtns">
                                  <label for="chechout__ul_block_radioBtn1">
                                      <input type="radio" class="chechout__ul_block_radioBtn" id="chechout__ul_block_radioBtn1" name="chechout__ul_block_radioBtn"> checkout as guest
                                  </label>
                                  
                                  <br>
                                  <label for="chechout__ul_block_radioBtn2" class="">
                                      <input type="radio" class="chechout__ul_block_radioBtn" id="chechout__ul_block_radioBtn2" name="chechout__ul_block_radioBtn"> register
                                  </label>

                              </div>
                              
                              <div class="chechout__ul_box_form_header">register and save time!</div>
                              <div class="chechout__ul_box_form_text">Register with us for future convenience</div>
                              
                              <div class="chechout__ul_box_form_block2">
                                  <div class="chechout__ul_box_form_block2_item"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</div>
                                  <div class="chechout__ul_box_form_block2_item"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status</div>
                              </div>
                              
                              
                              
                              <input type="submit" id="" class="chechout__ul_box_form_submit_btn" value="get a quote">
                          </form>
                          </div>
                          
                          <div class="chechout__ul_block">
                              <form action="#" id="chechout__ul_box_form" class="chechout__ul_block">
                                  <div class="chechout__ul_box_form_header">Already registed?</div>
                                  <div class="chechout__ul_box_form_text">Please log in below</div>
                                  
                                  <div class="chechout__ul_block_inputText">
                                      <label for="chechout__ul_block_inputText_email">EMAIL ADDRESS <span class="redColor">*</span></label>
                                      <input type="email" id="userEmail" class="chechout__ul_block_inputText_email chechout__ul_block_btn" required>

                                      <label for="chechout__ul_block_inputText_password">PASSWORD <span class="redColor">*</span></label>
                                      <input type="password" id="userPassword" class="chechout__ul_block_inputText_password chechout__ul_block_btn" required>
                                  </div>
                                  
                                  
                                  <div class="chechout__ul_box_form_requerdFields">* Required Fileds</div>
                              
                              
                              <div class="chechout__ul_box_form_submit_btns">
                                  
                                <input type="submit" id="" class="chechout__ul_box_form_submit_btn" value="Log in">
                                <input type="submit" value="Forgot Password ?" class="chechout__ul_box_form_submit_btn btn__forgotPassword">
                                  
                              </div>
                              
                          </form>
                          </div>
                      </div>
                  </details>
              </li>
              
              <li class="chechout__ul_item">
                  <details>
                      <summary class="chechout__ul_summary">02.   billing information</summary>
                      <div class="chechout__ul_box">
                          123
                      </div>
                  </details>
              </li>
              
              <li class="chechout__ul_item">
                  <details>
                      <summary class="chechout__ul_summary">03.   shipping information</summary>
                      <div class="chechout__ul_box">
                          123
                      </div>
                  </details>
              </li>
              
              <li class="chechout__ul_item">
                  <details>
                      <summary class="chechout__ul_summary">04.   Shipping method</summary>
                      <div class="chechout__ul_box">
                          123
                      </div>
                  </details>
              </li>
              
              <li class="chechout__ul_item">
                  <details>
                      <summary class="chechout__ul_summary">05.   payment method</summary>
                      <div class="chechout__ul_box">
                          123
                      </div>
                  </details>
              </li>
              
              <li class="chechout__ul_item">
                  <details>
                      <summary class="chechout__ul_summary">05.   order review</summary>
                      <div class="chechout__ul_box">
                          123
                      </div>
                  </details>
              </li>
          </ul>
          
      </div>
        
    </section>

    <Subscribe />
  </div>
</template>

<script>
import Breadcrumb from '@/components/app/Breadcrumb';
import Subscribe from '@/components/app/Subscribe';
export default {
  components: {
    Breadcrumb, Subscribe
  },
}
</script>

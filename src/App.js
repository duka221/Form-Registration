import { useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
toast.configure()
function App() {
  const [firstname, setFirstname] = useState("");
  const firstnameref = useRef();
  const [fistnameerror, setFirstNameError] = useState("");
  const [lastname, setLastname] = useState("");
  const lastnameref = useRef();
  const [lastnameerror, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const emailref = useRef();
  const [emailerror, setEmailError] = useState("");
  const [emailinputerror, setEmailInputError] = useState("");
  const [password, setPassword] = useState("");
  const passwordref = useRef();
  const [passworderror, setPasswordError] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [confirmpassworderror, setConfirmPasswordError] = useState("");
  const confirmpasswordref = useRef();
  const [passwordmatch, setPasswordMatch] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [phonenumbererror, setPhoneNumberError] = useState("");
  const phoneref = useRef();
  const [gender,setGender]= useState("");
  const [gendererror,setGenderError]=useState("");
  const [country,setCountry]=useState("");
  const [countryerror,setCountryError]=useState("");
  const [userDateBirth, setUserDateBirth] = useState("");
  const [userDateBirthError, setuserDateBirthError] = useState("");

  const information = () => {
    if (!firstname) {
      toast.info("შეიყვანეთ სახელი")
      setFirstNameError(true);
      setLastNameError(false);
      setGenderError(false);
      setEmailError(false);
      setPasswordError(false);
      setConfirmPasswordError(false);
      setPasswordMatch(false);
      setCountryError(false);
      setPhoneNumberError(false);
      setGenderError(false);
      firstnameref.current.focus();
    } else if (!lastname) {
      toast.info("შეიყვანეთ გვარი")
      setLastNameError(true);
      setFirstNameError(false);
      setGenderError(false);
      setEmailError(false);
      setPasswordError(false);
      setConfirmPasswordError(false);
      setPasswordMatch(false);
      setCountryError(false);
      setPhoneNumberError(false);
      setGenderError(false);
      lastnameref.current.focus();
    } else if (!email) {
      toast.info("შეიყვანეთ ელ.ფოსტა")
      setEmailError(true);
      setConfirmPasswordError(false);
      setGenderError(false);
      setPasswordError(false);
      setPasswordMatch(false);
      setFirstNameError(false);
      setLastNameError(false);
      setEmailInputError(false);
      setCountryError(false);
      setPhoneNumberError(false);
      setGenderError(false);
      emailref.current.focus();
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      toast.error("არასწორი ფორმატი")
      setEmailInputError(true);
    }
    else if (!phonenumber) {
      toast.info("შეიყვანეთ ტელეფონის ნომერი")
      setPhoneNumberError(true);
      setGenderError(false);
      setEmailError(false);
      setConfirmPasswordError(false);
      setPasswordError(false);
      setPasswordMatch(false);
      setFirstNameError(false);
      setLastNameError(false);
      setEmailInputError(false);
      setCountryError(false);
      setGenderError(false);
      phoneref.current.focus();
    } 
    else if (
      !/^\+?\d*$/.test(
        phonenumber
      )

    ) { 
      toast.error("შეიყვანეთ სწორი ფორმატით")
      setPhoneNumberError(true);
    }
    else if (phonenumber.length < 9) {
      toast.error("ტელეფონის ნომერი შეიყვანეთ სრულად")
      setPhoneNumberError(true);
    }
      else if(!country){
      setPhoneNumberError(false)
      toast.info("აირჩიეთ ქვეყანა")
      setCountryError(true);
    }
      else if(!gender){
        setPhoneNumberError(false)
        toast.info("მიუთითეთ სქესი")
        setGenderError(true)
      }
    else if(!userDateBirth){
      setPhoneNumberError(false)
      setGenderError(false);
      toast.info("შეავსეთ დაბადების თარიღის ველი")
      setuserDateBirthError(true)
    }
    else if (!password) {
      setPhoneNumberError(false)
      setGenderError(false);
      toast.info("შეიყვანეთ პაროლი")
      setPasswordError(true);
      setConfirmPasswordError(false);
      setPasswordMatch(false);
      setFirstNameError(false);
      setLastNameError(false);
      setEmailError(false);
      setCountryError(false);
      setGenderError(false);
      setuserDateBirthError(false);
      passwordref.current.focus();
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
        password
      )
    ) {
      toast.info(
        `გამოიყენეთ ერთი დიდი ასო,
         მინიმუმ 1 ციფრი,
         პაროლის მინიმალური სიგრძე უნდა შეადგენდეს 8 სიმბოლოს
         `)
      setPasswordError(true);
    }
     else if (!confirmpassword) {
      toast.info("გაიმეორეთ პაროლი")
      setConfirmPasswordError(true);
      setGenderError(false);
      setPhoneNumberError(false);
      setPasswordError(false);
      setPasswordMatch(false);
      setFirstNameError(false);
      setLastNameError(false);
      setEmailError(false);
      setCountryError(false);
      setGenderError(false);
      setuserDateBirthError(false);
      confirmpasswordref.current.focus();
    } else if (password != confirmpassword) {
      toast.error("პაროლი არ ემთხვევა")
      setPasswordMatch(true);
      setGenderError(false);
      setConfirmPasswordError(false);
      setPasswordError(false);
      setFirstNameError(false);
      setLastNameError(false);
      setEmailError(false);
      setCountryError(false);
      setGenderError(false);
      setuserDateBirthError(false);
      }
      else {
      setConfirmPasswordError(false);
      setPasswordError(false);
      setPasswordMatch(false);
      const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
        dateOfBirth: userDateBirth,
        gender: gender,
        phonenumber: phonenumber
      };
      toast.success("წარმატებით დასრულდა რეგისტრაცია")
      console.log(data);
    }
  };

  return (
    <div>
      <div class="container register">
        <div class="row">
          <div class="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>

            <input type="submit" name="" value="Login" />
            <br />
          </div>
          <div class="col-md-9 register-right">
            {/* <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        </ul> */}
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 class="register-heading">რეგისტრაციის ფორმა</h3>
                <div class="row register-form">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="სახელი"
                        ref={firstnameref}
                        className={
                          fistnameerror
                            ? "form-control error__input__container"
                            : "form-control"
                        }
                        value={firstname}
                        onChange={(e) => {
                          setFirstname(e.target.value);
                          if (firstname.length < 0) {
                            setFirstNameError(true);
                          } else {
                            setFirstNameError(false);
                          }
                        }}
                      />
                      <label
                        for=""
                        className={
                          fistnameerror
                            ? "form__control error__label__container"
                            : "form__control"
                        }
                      ></label>
                       </div>
                    
                    
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="გვარი"
                        ref={lastnameref}
                        className={
                          lastnameerror
                            ? "form-control error__input__container"
                            : "form-control"
                        }
                        value={lastname}
                        onChange={(e) => {
                          setLastname(e.target.value);
                          if (lastname.length < 0) {
                            setLastNameError(true);
                          } else {
                            setLastNameError(false);
                          }
                        }}
                      />
                      <label
                        for=""
                        className={
                          lastnameerror
                            ? "form__control error__label__container"
                            : "form__control"
                        }
                      ></label>
                      </div>
                    
                    
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="თქვენი ელ.ფოსტა"
                        value={email}
                        ref={emailref}
                        className={
                          emailerror || emailinputerror
                            ? "form-control error__input__container"
                            : "form-control"
                        }
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (email.length < 0) {
                            setEmailError(true);
                          } else {
                            setEmailError(false);
                            setEmailInputError(false);
                          }
                        }}
                      />
                      <label
                        for=""
                        className={
                          emailerror || emailinputerror
                            ? "form__control error__label__container"
                            : "form__control"
                        }
                      ></label>
                    </div>

                    <div class="form-group">
                      <PhoneInput className="form control PhoneInput" style={{padding:"5px"}}
                          value={phonenumber}
                          ref={phoneref}
                          className={
                            phonenumbererror
                              ? "form-control error__input__container"
                              : "form-control" 
                          }
                          onChange={setPhoneNumber}
                         />
                          <label
                            for=""
                            className={
                              phonenumbererror
                                ? "form__control error__label__container"
                                : "form__control"
                            }
                          ></label>
                    </div>
                    
                    
                    <div class="form-group">
                      <select class="form-control"
                        className={
                          countryerror
                            ? "form-control error__input__container"
                            : "form-control"
                        }
                        onChange={(e) => {
                          setCountry(e.target.value);
                          if (firstname.length < 0) {
                            setCountryError(true);
                          } else {
                            setCountryError(false);
                          }
                        }}
                      >
                        <option class="hidden" selected disabled>
                          აირჩიეთ ქვეყანა
                        </option>
                        <option value="Afganistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antigua & Barbuda">
                          Antigua & Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bonaire">Bonaire</option>
                        <option value="Bosnia & Herzegovina">
                          Bosnia & Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Ter">
                          British Indian Ocean Ter
                        </option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Canary Islands">Canary Islands</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Channel Islands">Channel Islands</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos Island">Cocos Island</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote DIvoire">Cote DIvoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Curaco">Curacao</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="East Timor">East Timor</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands">
                          Falkland Islands
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Ter">
                          French Southern Ter
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Great Britain">Great Britain</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="India">India</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea North">Korea North</option>
                        <option value="Korea Sout">Korea South</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Laos">Laos</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macau">Macau</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Midway Islands">Midway Islands</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Nambia">Nambia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherland Antilles">
                          Netherland Antilles
                        </option>
                        <option value="Netherlands">
                          Netherlands (Holland, Europe)
                        </option>
                        <option value="Nevis">Nevis</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau Island">Palau Island</option>
                        <option value="Palestine">Palestine</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Phillipines">Philippines</option>
                        <option value="Pitcairn Island">Pitcairn Island</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Republic of Montenegro">
                          Republic of Montenegro
                        </option>
                        <option value="Republic of Serbia">
                          Republic of Serbia
                        </option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="St Barthelemy">St Barthelemy</option>
                        <option value="St Eustatius">St Eustatius</option>
                        <option value="St Helena">St Helena</option>
                        <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                        <option value="St Lucia">St Lucia</option>
                        <option value="St Maarten">St Maarten</option>
                        <option value="St Pierre & Miquelon">
                          St Pierre & Miquelon
                        </option>
                        <option value="St Vincent & Grenadines">
                          St Vincent & Grenadines
                        </option>
                        <option value="Saipan">Saipan</option>
                        <option value="Samoa">Samoa</option>
                        <option value="Samoa American">Samoa American</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome & Principe">
                          Sao Tome & Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Tahiti">Tahiti</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad & Tobago">
                          Trinidad & Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks & Caicos Is">
                          Turks & Caicos Is
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Erimates">
                          United Arab Emirates
                        </option>
                        <option value="United States of America">
                          United States of America
                        </option>
                        <option value="Uraguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Vatican City State">
                          Vatican City State
                        </option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Virgin Islands (Brit)">
                          Virgin Islands (Brit)
                        </option>
                        <option value="Virgin Islands (USA)">
                          Virgin Islands (USA)
                        </option>
                        <option value="Wake Island">Wake Island</option>
                        <option value="Wallis & Futana Is">
                          Wallis & Futana Is
                        </option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zaire">Zaire</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>
                    
                    
                    <div class="form-group">
                      <div class="maxl">
                        <label class="radio inline" style={{padding: "10px"}}>
                          <input
                            type="radio"
                            className={
                              gendererror
                              ?  "radio inline error__radiobutton"
                              : "radio inline" 
                            }
                            name="gender"
                            value="მამრობითი"
                            onChange={(e) => {
                              setGender(e.target.value);
                            }} 
                          />
                          <span > მამრობითი </span>
                        </label>
                        <label class="radio inline">
                          <input
                          type="radio"
                          className={
                            gendererror
                            ?  "radio inline error__radiobutton"
                            : "radio inline" 
                          }
                          name="gender"
                          value="მდედრობითი"
                          onChange={(e) => {
                            setGender(e.target.value);
                          }} 
                          />
                          <span>  მდედრობითი </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  
                  <div class="col-md-6">
                    
                      <div class="form-group">
                        <Calendar
                            value={userDateBirth}
                            className={
                              userDateBirthError
                                ? "form-control error__input__container"
                                : "form-control"
                            }
                            onChange={setUserDateBirth}
                          />
                      <label
                        for=""
                        className={
                          confirmpassworderror || passwordmatch
                            ? "form__control error__label__container"
                            : "form__control"
                        }
                      ></label>
                      
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="პაროლი"
                        ref={passwordref}
                        className={
                          passworderror || passwordmatch
                            ? "form-control error__input__container"
                            : "form-control"
                        }
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (password.length < 0) {
                            setPasswordError(true);
                          } else {
                            setPasswordError(false);
                          }
                        }}
                      />
                      <label
                        for=""
                        className={
                          passworderror || passwordmatch
                            ? "form__control error__label__container"
                            : "form__control"
                        }
                      ></label>
                    
                    </div>

                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="დაადასტურეთ პაროლი"
                        value={confirmpassword}
                        ref={confirmpasswordref}
                        className={
                          confirmpassworderror || passwordmatch
                            ? "form-control error__input__container"
                            : "form-control"
                        }
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                          if (confirmpassword.length < 0) {
                            setConfirmPasswordError(true);
                          } else {
                            setConfirmPasswordError(false);
                          }
                        }}
                      />
                      <label
                        for=""
                        className={
                          confirmpassworderror || passwordmatch
                            ? "form__control error__label__container"
                            : "form__control"
                        }
                      ></label>
                      
                    </div>

                    <input
                      type="submit"
                      class="btnRegister"
                      value="Register"
                      onClick={() => information()}
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

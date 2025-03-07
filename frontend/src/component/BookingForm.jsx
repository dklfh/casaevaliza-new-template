import React from 'react';

const BookingForm = () => {
  return (
    <div className="max-w-1140 mx-auto px-8 py-20">
      <h1 className="text-[50px] font-island text-gray-800 mb-4">Book Now</h1>
      <hr className="mb-6" />
      <form className="space-y-4 font-gilda">
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/4" htmlFor="name">Enter Your Name :</label>
          <input
            id="name"
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-coklat focus:outline-none focus:ring-0 focus:border-coklat peer"
            placeholder="Enter full name"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/4" htmlFor="email">E-mail Address :</label>
          <input
            id="email"
            type="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-coklat focus:outline-none focus:ring-0 focus:border-coklat peer"
            placeholder="Enter email address"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/4" htmlFor="phone">Phone Number :</label>
          <input
            id="phone"
            type="tel"
            pattern="[0-9]{10,15}"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-coklat focus:outline-none focus:ring-0 focus:border-coklat peer"
            placeholder="Enter phone number"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/4" htmlFor="nationality">Nationality :</label>
          <select
            id="nationality"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-coklat focus:outline-none focus:ring-0 focus:border-coklat peer"
          >
            <option value="" disabled selected>--select one--</option>
            <option value="Afghan">Afghan</option>
            <option value="Albanian">Albanian</option>
            <option value="Algerian">Algerian</option>
            <option value="American">American</option>
            <option value="Andorran">Andorran</option>
            <option value="Angolan">Angolan</option>
            <option value="Antiguans">Antiguans</option>
            <option value="Argentinean">Argentinean</option>
            <option value="Armenian">Armenian</option>
            <option value="Australian">Australian</option>
            <option value="Austrian">Austrian</option>
            <option value="Azerbaijani">Azerbaijani</option>
            <option value="Bahamian">Bahamian</option>
            <option value="Bahraini">Bahraini</option>
            <option value="Balinese">Balinese</option>
            <option value="Bangladeshi">Bangladeshi</option>
            <option value="Barbadian">Barbadian</option>
            <option value="Barbudans">Barbudans</option>
            <option value="Batswana">Batswana</option>
            <option value="Belarusian">Belarusian</option>
            <option value="Belgian">Belgian</option>
            <option value="Belizean">Belizean</option>
            <option value="Beninese">Beninese</option>
            <option value="Bhutanese">Bhutanese</option>
            <option value="Bolivian">Bolivian</option>
            <option value="Bosnian">Bosnian</option>
            <option value="Brazilian">Brazilian</option>
            <option value="British">British</option>
            <option value="Bruneian">Bruneian</option>
            <option value="Bulgarian">Bulgarian</option>
            <option value="Burkinabe">Burkinabe</option>
            <option value="Burmese">Burmese</option>
            <option value="Burundian">Burundian</option>
            <option value="Cambodian">Cambodian</option>
            <option value="Cameroonian">Cameroonian</option>
            <option value="Canadian">Canadian</option>
            <option value="Cape Verdean">Cape Verdean</option>
            <option value="Central African">Central African</option>
            <option value="Chadian">Chadian</option>
            <option value="Chilean">Chilean</option>
            <option value="Chinese">Chinese</option>
            <option value="Colombian">Colombian</option>
            <option value="Comoran">Comoran</option>
            <option value="Congolese">Congolese</option>
            <option value="Costa Rican">Costa Rican</option>
            <option value="Croatian">Croatian</option>
            <option value="Cuban">Cuban</option>
            <option value="Cypriot">Cypriot</option>
            <option value="Czech">Czech</option>
            <option value="Danish">Danish</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominican">Dominican</option>
            <option value="Dutch">Dutch</option>
            <option value="East Timorese">East Timorese</option>
            <option value="Ecuadorean">Ecuadorean</option>
            <option value="Egyptian">Egyptian</option>
            <option value="Emirian">Emirian</option>
            <option value="Equatorial Guinean">Equatorial Guinean</option>
            <option value="Eritrean">Eritrean</option>
            <option value="Estonian">Estonian</option>
            <option value="Ethiopian">Ethiopian</option>
            <option value="Fijian">Fijian</option>
            <option value="Filipino">Filipino</option>
            <option value="Finnish">Finnish</option>
            <option value="French">French</option>
            <option value="Gabonese">Gabonese</option>
            <option value="Gambian">Gambian</option>
            <option value="Georgian">Georgian</option>
            <option value="German">German</option>
            <option value="Ghanaian">Ghanaian</option>
            <option value="Greek">Greek</option>
            <option value="Grenadian">Grenadian</option>
            <option value="Guatemalan">Guatemalan</option>
            <option value="Guinea-Bissauan">Guinea-Bissauan</option>
            <option value="Guinean">Guinean</option>
            <option value="Guyanese">Guyanese</option>
            <option value="Haitian">Haitian</option>
            <option value="Herzegovinian">Herzegovinian</option>
            <option value="Honduran">Honduran</option>
            <option value="Hungarian">Hungarian</option>
            <option value="Icelander">Icelander</option>
            <option value="Indian">Indian</option>
            <option value="Indonesian">Indonesian</option>
            <option value="Iranian">Iranian</option>
            <option value="Iraqi">Iraqi</option>
            <option value="Irish">Irish</option>
            <option value="Israeli">Israeli</option>
            <option value="Italian">Italian</option>
            <option value="Ivorian">Ivorian</option>
            <option value="Jamaican">Jamaican</option>
            <option value="Japanese">Japanese</option>
            <option value="Jordanian">Jordanian</option>
            <option value="Kazakhstani">Kazakhstani</option>
            <option value="Kenyan">Kenyan</option>
            <option value="Kittian and Nevisian">Kittian and Nevisian</option>
            <option value="Kuwaiti">Kuwaiti</option>
            <option value="Kyrgyz">Kyrgyz</option>
            <option value="Laotian">Laotian</option>
            <option value="Latvian">Latvian</option>
            <option value="Lebanese">Lebanese</option>
            <option value="Liberian">Liberian</option>
            <option value="Libyan">Libyan</option>
            <option value="Liechtensteiner">Liechtensteiner</option>
            <option value="Lithuanian">Lithuanian</option>
            <option value="Luxembourger">Luxembourger</option>
            <option value="Macedonian">Macedonian</option>
            <option value="Malagasy">Malagasy</option>
            <option value="Malawian">Malawian</option>
            <option value="Malaysian">Malaysian</option>
            <option value="Maldivan">Maldivan</option>
            <option value="Malian">Malian</option>
            <option value="Maltese">Maltese</option>
            <option value="Marshallese">Marshallese</option>
            <option value="Mauritanian">Mauritanian</option>
            <option value="Mauritian">Mauritian</option>
            <option value="Mexican">Mexican</option>
            <option value="Micronesian">Micronesian</option>
            <option value="Moldovan">Moldovan</option>
            <option value="Monacan">Monacan</option>
            <option value="Mongolian">Mongolian</option>
            <option value="Moroccan">Moroccan</option>
            <option value="Mosotho">Mosotho</option>
            <option value="Motswana">Motswana</option>
            <option value="Mozambican">Mozambican</option>
            <option value="Namibian">Namibian</option>
            <option value="Nauruan">Nauruan</option>
            <option value="Nepalese">Nepalese</option>
            <option value="Netherlander">Netherlander</option>
            <option value="New Zealander">New Zealander</option>
            <option value="Ni-Vanuatu">Ni-Vanuatu</option>
            <option value="Nicaraguan">Nicaraguan</option>
            <option value="Nigerian">Nigerian</option>
            <option value="Nigerien">Nigerien</option>
            <option value="North Korean">North Korean</option>
            <option value="Northern Irish">Northern Irish</option>
            <option value="Norwegian">Norwegian</option>
            <option value="Omani">Omani</option>
            <option value="Pakistani">Pakistani</option>
            <option value="Palauan">Palauan</option>
            <option value="Panamanian">Panamanian</option>
            <option value="Papua New Guinean">Papua New Guinean</option>
            <option value="Paraguayan">Paraguayan</option>
            <option value="Peruvian">Peruvian</option>
            <option value="Polish">Polish</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Qatari">Qatari</option>
            <option value="Romanian">Romanian</option>
            <option value="Russian">Russian</option>
            <option value="Rwandan">Rwandan</option>
            <option value="Saint Lucian">Saint Lucian</option>
            <option value="Salvadoran">Salvadoran</option>
            <option value="Samoan">Samoan</option>
            <option value="San Marinese">San Marinese</option>
            <option value="Sao Tomean">Sao Tomean</option>
            <option value="Saudi">Saudi</option>
            <option value="Scottish">Scottish</option>
            <option value="Senegalese">Senegalese</option>
            <option value="Serbian">Serbian</option>
            <option value="Seychellois">Seychellois</option>
            <option value="Sierra Leonean">Sierra Leonean</option>
            <option value="Singaporean">Singaporean</option>
            <option value="Slovakian">Slovakian</option>
            <option value="Slovenian">Slovenian</option>
            <option value="Solomon Islander">Solomon Islander</option>
            <option value="Somali">Somali</option>
            <option value="South African">South African</option>
            <option value="South Korean">South Korean</option>
            <option value="Spanish">Spanish</option>
            <option value="Sri Lankan">Sri Lankan</option>
            <option value="Sudanese">Sudanese</option>
            <option value="Surinamer">Surinamer</option>
            <option value="Swazi">Swazi</option>
            <option value="Swedish">Swedish</option>
            <option value="Swiss">Swiss</option>
            <option value="Syrian">Syrian</option>
            <option value="Taiwanese">Taiwanese</option>
            <option value="Tajik">Tajik</option>
            <option value="Tanzanian">Tanzanian</option>
            <option value="Thai">Thai</option>
            <option value="Togolese">Togolese</option>
            <option value="Tongan">Tongan</option>
            <option value="Trinidadian or Tobagonian">Trinidadian or Tobagonian</option>
            <option value="Tunisian">Tunisian</option>
            <option value="Turkish">Turkish</option>
            <option value="Tuvaluan">Tuvaluan</option>
            <option value="Ugandan">Ugandan</option>
            <option value="Ukrainian">Ukrainian</option>
            <option value="Uruguayan">Uruguayan</option>
            <option value="Uzbekistani">Uzbekistani</option>
            <option value="Venezuelan">Venezuelan</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Welsh">Welsh</option>
            <option value="Yemenite">Yemenite</option>
            <option value="Zambian">Zambian</option>
            <option value="Zimbabwean">Zimbabwean</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/4" htmlFor="checkin">Check In :</label>
          <input
            id="checkin"
            type="date"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/4" htmlFor="checkout">Check Out :</label>
          <input
            id="checkout"
            type="date"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-coklat focus:outline-none focus:ring-0 focus:border-coklat peer"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/4" htmlFor="persons">Number of Person :</label>
          <input
            id="persons"
            type="phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-coklat focus:outline-none focus:ring-0 focus:border-coklat peer"
            placeholder="Enter the number of people"
          />
        </div>
        <div className="flex items-center">
          <input id="copy" type="checkbox" className="mr-2 border-coklat" />
          <label htmlFor="copy">Email a copy of this booking to your own address</label>
        </div>
        <div className="mt-4">
          <div className="g-recaptcha" data-sitekey="your-site-key"></div>
        </div>
        <button
          type="submit"
          className="btn relative inline-block py-3 px-10 tracking-normal text-white border border-solid font-gilda text-sm border-white cursor-pointer bg-coklat no-underline overflow-hidden uppercase z-10 max-w-44"
        >
          Send Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

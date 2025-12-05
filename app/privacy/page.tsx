"use client";

import { motion } from "framer-motion";
import Footer from "../footer";
import Navbar from "../navbar";

export default function Privacy() {
  return (
    <>
    <div className="sticky top-0 z-60">
      <Navbar />
    </div>
    <section className="w-full min-h-screen bg-[#F2F2F2] text-black py-20 px-6 flex justify-center pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full space-y-6"
      >
        <hr className="border-t border-black/80 mt-8" />

        <h1 className="text-5xl md:text-6xl font-semibold mb-2">PRIVACY NOTICE</h1>

        <div className="space-y-4 text-black/90 leading-relaxed text-lg md:text-xl">

        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-green-500">
        BROADHEAD TECHNOLOGIES LIMITED</h2><br/>

        <p>We at Broadhead Technologies Ltd (“Broadhead Technologies Ltd”, “we”, “us” or “our”) respect your privacy and recognise the importance of providing a secure environment for your personal data. Therefore, we are committed to being transparent about how we collect and process your personal data.</p>

        <p>The purpose of this privacy notice (“Privacy Notice”) is to inform you as a user about why and how we process your personal data (that is any information that can be linked or attributed to you, “Personal Data”) when you access our website. This includes information regarding with whom we will share your Personal Data, how long we will retain it, and which rights you have in relation to the processing.</p>

        <p>
          This Privacy Notice applies whenever you visit our website:{" "}
          <a
            href="https://www.broadheadtechnologies.com"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.broadheadtechnologies.com
          </a>
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">GENERAL INFORMATION</h2>

        <p>In this part of our Privacy Notice, you will find general information about how we process your Personal Data when you visit our website. For specific information with more details about our processing activities, please see the specific information below.</p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">WHO IS RESPONSIBLE FOR THE PROCESSING OF YOUR PERSONAL DATA?</h2>

        <p>Broadhead Technologies Ltd, 31-41 Worship Street, London, United Kingdom is responsible (“the Data Controller”) for the processing of your Personal Data when you visit our website.</p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">INFORMATION WE MAY COLLECT FROM YOU</h2>

        <p>When you visit our website or use our services, we collect, use, store and transfer different kinds of Personal Data. As a general principle, we do not collect and do not ask you to provide any “special categories of Personal Data”, which is any particularly protected information such as data concerning health, religion, political opinions or philosophical beliefs, sexual preferences, or orientation. The information we collect depends on which of our services you use and how you use them.</p>

        <p><strong>We may collect and process the following data about you:</strong></p>

        <p>
          Information that you provide by filling in forms on our site:{" "}
          <a
            href="https://www.broadheadtechnologies.com"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.broadheadtechnologies.com
          </a>{" "}
          (“our site”), such as name, address, email address, and phone number. (This includes
          information provided at the time of completing the Contact Us form or otherwise getting in
          touch with us. If you contact us, we may keep a record of that correspondence.)
        </p>

        <p>Details of your visits to our site include but are not limited to, traffic data, location data, weblogs and other communication data, whether this is required for our own purposes or otherwise and the resources that you access.</p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">IP ADDRESSES</h2>

        <p>We may collect information about your computer, including where available your IP address, operating system, and browser type, for system administration and to report aggregate information. This is statistical data about our users’ browsing actions and patterns and does not identify any individual.</p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">COOKIES</h2>

        <p>Cookies are small amounts of information that are sent to and stored on your computer. Our site uses cookies to distinguish you from other users of our site. This helps us to provide you with a good experience when you browse and also allows us to improve our site. We use Google “analytical” cookies on our site.</p>

        <p>If you do not wish to have cookies placed on your computer you can disable them in your internet browser. Turning them off, however, may mean that you will not be able to enjoy this site to its fullest.</p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">USES MADE OF THE PERSONAL DATA</h2>

        <p>We may use your personal data for our legitimate interests in order to:</p>

        <ul className="list-disc pl-20">
          <li>To ensure that content from our site is presented in the most effective manner for you and for your computer.</li>
          <li>To allow you to browse and view our site when you choose to do so.</li>
          <li>To notify you about changes to our site or service.</li>
        </ul>

        <p>We may process your Personal Data for the purposes described in this Privacy Policy, based on your consent.</p>
        <ul className="list-disc pl-20">
        <li>To provide you with information, products or services that you request from us or which we feel may interest you, where you have consented to be contacted for such purposes.</li>
        </ul> 

        <p>We process your Personal Data for the performance of a contract or to take steps prior to entering into a contract to which you are a party.</p>

        <ul className="list-disc pl-20">
          <li>To carry out our obligations arising from any contracts entered into between you and us.</li>
        </ul>

        <p>We may engage with you for direct marketing purposes. Since the legal basis for direct marketing differs in every jurisdiction, we may rely on consent or legitimate interest before sending you direct marketing materials.</p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">WHERE WE STORE YOUR PERSONAL DATA</h2>

        <p>The information you provide to us is stored on our secure servers in the EEA. It may also be processed by staff who work for us or for one of our suppliers. If we or our suppliers transfer any information outside of the EEA it will only be done with the relevant protection (stated under UK law) being in place. We have implemented appropriate safeguards to protect your Personal Data when it is transferred outside the UK/EEA, including the execution of the European Commission’s and Information Commissioner's Office’s (ICO) standard data protection clauses (also known as Model Clauses) to provide safeguards for your Personal Data. By submitting your personal data, you agree to this storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy.</p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">HOW DO WE PROTECT YOUR PERSONAL DATA?</h2>

        <p>We have implemented appropriate technical and organisational security measures designed to protect your Personal Data against accidental, unlawful or unauthorised destruction, loss, alteration, access, disclosure or use. We update and test our security standards on an ongoing basis. In addition, we take reasonable steps to assure that third parties to whom we transfer your Personal Data provide sufficient protection of Personal Data.</p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">HOW LONG DO WE STORE YOUR PERSONAL DATA?</h2>

        <p>We will not retain your Personal Data longer than necessary to fulfil the purposes for which the data was collected or to fulfil our legal obligations or necessary for the establishment, exercise or defence of legal claims or resolving disputes. Afterwards, we will delete or anonymise your Personal Data.</p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">DISCLOSURE OF PERSONAL DATA TO THIRD PARTIES</h2>

        <p>As well as set out elsewhere in this policy, we may disclose your information to the following parties, because we have a legitimate interest in doing so:</p>

        <ul className="list-disc pl-20">
          <li>Our group companies (including our subsidiaries, our holding companies and any subsidiaries of our holding companies as defined in Section 1159 of the Companies Act 2006);</li>
          <li>Staff members and third-party suppliers in order to facilitate the provision of goods or services to you.</li>
          <li>Our affiliated entities to support internal administration.</li>
          <li>IT software providers that host our website and store data on our behalf.</li>
          <li>Our professional advisers including consultants, legal advisors, bankers, and insurers; and HM Revenue and Customs, regulators and other authorities who require reporting of processing activities in certain circumstances.</li>
          <li>To third-party organisations who provide us with information on an anonymised basis about customer demographics and expenditure; and</li>
          <li>To third parties with whom we may in the future negotiate a sale, transfer, or merger of our business.</li>
        </ul>

        <p>We may also disclose personal data to the police, regulatory bodies, legal advisors or similar third parties where we are under a legal duty to disclose or share personal data in order to comply with any legal obligation, or in order to enforce or apply our website terms and conditions and other agreements; or to protect our rights, property, or safety of our customers, or others.</p>

        <p>We will not sell or distribute personal data to other organisations without your approval.</p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">YOUR RIGHTS</h2>

        <p>Data Protection Legislation means the Data Protection Act 2018 (DPA2018), United Kingdom General Data Protection Regulation (UK GDPR), the Privacy and Electronic Communications (EC Directive) Regulations 2003 and any legislation implemented in connection with the aforementioned legislation. Where data is processed by a controller or processor established in the European Union or comprises the data of people in the European Union, it also includes the EU General Data Protection Regulation (EU GDPR). This includes any replacement legislation coming into effect from time to time.</p>

        <p>It is important that the personal data we hold about you is accurate and current. Please keep us informed if the personal data we hold about you changes.</p>

        <p>
          <strong>Right to Object</strong><br />
          Data protection legislation gives you the right to object to the processing of your personal
          data in certain circumstances, and to withdraw your consent to the processing of your personal
          data where this has been provided, although we may have the right to process your data without
          your consent in certain circumstances, as set out elsewhere in this policy. You also have the
          right to access information held about you and for this to be provided in an intelligible
          form. If you would like a copy of some or all of your personal information, please send an
          email to our Data Protection Officer at{" "}
          <a
            href="mailto:infosec@broadheadtechnologies.com"
            className="underline"
          >
            infosec@broadheadtechnologies.com
          </a>
          . In certain circumstances, we reserve the right to charge a reasonable fee to comply with your
          request.
        </p>

        <p>You can also ask us to do the following:</p>

        <ul className="list-disc pl-20">
          <li>Access the personal data we hold about</li>
          <li>Update or amend your personal data if you feel this is inaccurate.</li>
          <li>Remove your personal data from our records entirely.</li>
          <li>Send you copies of your personal data in a commonly used format, and transfer your information to another entity; or</li>
          <li>Restrict the use of your personal data.</li>
          <li>Withdraw your consent.</li>
        </ul>

        <p>If you make this type of request, we may request specific information from you to help us confirm your identity and verify your request. Data protection legislation may allow or require us to refuse your request. If we refuse your request we will inform you of the reasons why, subject to any legal or regulatory restrictions.</p>

        <p>
          Please send any requests relating to the above in writing to our Data Protection Officer at{" "}
          <a
            href="mailto:infosec@broadheadtechnologies.com"
            className="underline"
          >
            infosec@broadheadtechnologies.com
          </a>
          , specifying your name and the details of your request.
        </p>

        <p>If you believe we have not complied with our obligations under applicable data protection laws and regulations, you can lodge a complaint with a competent data protection authority, for example the Information Commissioner's Office (ICO) in the UK.</p>

        <h2 className="text-xl md:text-2xl font-semibold mt-6">CHANGES TO OUR PRIVACY POLICY</h2>

        <p>Any changes we may make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by e-mail.</p>
        <br/><br/>
        <div className="border-t-3 border-green-500 mt-10 pt-2">
          <p className="text-green-500 font-semibold">
            THIS PRIVACY NOTICE WAS LAST UPDATED ON: 25/03/2025
          </p>
        </div>
        </div>
        </motion.div>
      </section>
      <Footer />
      </>
  );
}

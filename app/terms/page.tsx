"use client";

import { motion } from "framer-motion";
import Footer from "../footer";
import Navbar from "../navbar";

export default function Terms() {
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

          <h1 className="text-5xl md:text-6xl font-semibold mb-2">TERMS AND CONDITIONS</h1>

          <div className="space-y-4 text-black/90 leading-relaxed text-lg md:text-xl">

            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-green-500">
              BROADHEAD TECHNOLOGIES LIMITED
            </h2>

            <h2 className="text-xl md:text-2xl font-semibold mt-6">INTRODUCTION</h2>

            <p>
              Welcome to Broadhead Technologies Ltd’s web site (the “Web Site”). The Web Site is operated by Broadhead Technologies Ltd (registered in England under the number 15928440) with our registered office at 5th Floor, 31-41 Worship Street, London EC2A 2DX (“we” or “us”). Our VAT registration number is 486 1617 66.
            </p>

            <p>
              These terms and conditions apply to your access, browsing, use and participation in this Web Site and by so doing you will be treated as having accepted these terms and conditions. Please do not access or browse our Web Site if you do not accept these terms and conditions. They apply in addition to our Privacy Policy and Cookie Policy.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6">1. ACCESSING OUR SITE</h2>

            <p className="ml-6">1.1 We do not charge for access to and use of our Web Site.</p>

            <p className="ml-20">
              1.2 We do not guarantee that our Web Site, or any content on it, will always be available or be uninterrupted. Access to our Web Site is permitted on a temporary basis. We may suspend, withdraw, discontinue or change all or any part of our Web Site without notice. We will not be liable to you if for any reason our Web Site is unavailable at any time or for any period.
            </p>

            <p className="ml-20">
              1.3 You are responsible for making all arrangements necessary for you to have access to our Web Site. You are responsible for configuring your information technology, computer programs and platform in order to access our Web Site. You should use your own virus protection software.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6">2. INTELLECTUAL PROPERTY RIGHTS</h2>

            <p className="ml-20">2.1 We are the owner or the licensee of all intellectual property rights in and relating to:</p>
            <ul className="list-disc pl-30">
              <li>our Web Site;</li>
              <li>the material (including all logos, text and graphics) published on the Web Site;</li>
              <li>the software used to operate our Web Site.</li>
            </ul>

            <p className="ml-20">These works are protected by copyright and other intellectual property rights around the world. All such rights are reserved.</p>

            <p className="ml-20">2.2 You may print off one copy, and may download extracts, of any page(s) from our Web Site for your personal reference and you may draw the attention of others within your organisation to material posted on our Web Site.</p>

            <p className="ml-20">2.3 You must not modify the paper or digital copies of any materials you have printed off or downloaded in accordance with clause 2.2 in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.</p>

            <p className="ml-20">2.4 Our status (and that of any identified contributors) as the authors of material on our Web Site must always be acknowledged.</p>

            <p className="ml-20">2.5 You must not misuse the Web Site by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorized access to the Web Site, the server on which the Web Site is stored or any server, computer or database connected to the Web Site. You must not attack the Web Site via a denial-of-service attack or a distributed denial-of service attack. By breaching this provision, you could commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use the Web Site will cease immediately.</p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6">3. CONTENT</h2>
            <p className="ml-20">3.1 The content on our Web Site is provided for general information only. It is not intended to amount to advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on our Web Site.</p>
            <p className="ml-20">3.2 Although we make reasonable efforts to update the information on our Web Site, we make no representations, warranties or guarantees, whether express or implied, that the content on our Web Site is accurate, complete or up-to-date.</p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6">4. DISCLAIMER AND LIABILITY</h2>
            <p className="ml-20">4.1 Nothing in these terms shall limit our liability for fraud or for death or personal injury caused by our negligence or in relation to any other liability which cannot be excluded or limited by law.</p>
            <p className="ml-20">4.2 Subject to clause 4.1 and other than as stated in this clause 4, all implied terms, conditions or warranties are hereby excluded...</p>
            <p className="ml-20">Whilst we make every effort to ensure the availability and accuracy of our Web Site and any content, we do not warrant that the availability of our Web Site will be uninterrupted or that Web Site and any materials accessible via the Web Site will be error or omission free.</p>
            <p className="ml-20">4.4 We do not accept any responsibility for any use made of the Web Site and we shall not be liable:</p>
                <ul className="list-disc pl-30">
                    <li>
                        in any circumstances for any loss of profits, loss or revenue, loss of or damage to goodwill, loss of customers, loss in connection with third party claims, or any indirect, special or consequential loss (even if the party concerned has advised of the possibility of such loss);
                    </li>
                    <li>
                        for any failures, interruptions, delays or other matters of a similar nature arising out of circumstances beyond our reasonable control; and/or
                    </li>
                    <li>
                        for any other loss suffered in connection with the use of our Web Site or any content to the fullest extent that we may exclude or limit such liability under applicable law.
                    </li>
                </ul>

            <h2 className="text-xl md:text-2xl font-semibold mt-6">5. YOUR PERSONAL INFORMATION</h2>
            <p className="ml-20">5.1 Please see our privacy policy for details of how we process your personal details and how we use cookies on the Web Site <a href="http://www.broadheadtechnologies.com/privacy" className="underline" target="_blank" rel="noopener noreferrer">http://www.broadheadtechnologies.com/privacy</a>.</p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6">6. VARIATIONS</h2>
            <p className="ml-20">6.1 We may revise these terms and conditions at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we made, as they are binding on you. Some of the provisions contained in these terms and conditions may also be superseded by provisions or notices published elsewhere on our Web Site.</p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6">7. LINKING TO OUR WEB SITE</h2>
            <p className="ml-20">7.1 You may link to our home page or any other relevant page of our Web Site, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists.</p>
            <p className="ml-20">7.2 You must not establish a link from any website that is not owned by you.</p>
            <p className="ml-20">7.3 Our Web Site must not be framed on any other site. We reserve the right to withdraw linking permission without notice.</p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6">8. GENERAL TERMS</h2>
            <p className="ml-20">8.1 If we fail, at any time, to insist upon strict performance of any of your obligations under any of these terms and conditions, or if we fail to exercise any of the rights or remedies to which we are entitled under these terms and conditions, this shall not constitute a waiver of such rights or remedies and shall not relieve you from compliance with such obligations.</p>
            <p className="ml-20">8.2 We will not be liable to you for any breach of these terms and conditions that arises because of any circumstances which we cannot reasonably be expected to control. 8.3 No term of this agreement is enforceable under the Contracts (Rights of Third Parties) Act 1999 by a person who is not a party to this agreement.</p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6">9. LAW</h2>
            <p className="ml-20">9.1 These terms are governed by English law. You agree to submit to the exclusive jurisdiction of the English courts provided that nothing in this clause will prevent us from taking any action in any court that has jurisdiction over you.</p>

            <br/>
            <div className="border-t-3 border-green-500 mt-10 pt-2">
              <p className="text-green-500 font-semibold">
                THESE TERMS AND CONDITIONS WERE LAST UPDATED ON: 25/03/2025
              </p>
            </div>

          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}

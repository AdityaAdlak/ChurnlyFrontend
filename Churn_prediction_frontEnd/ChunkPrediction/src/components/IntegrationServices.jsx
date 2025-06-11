import React from "react";
import chargebee from "../assets/chargebee00.png";
import segment from "../assets/segment.png";
import getResponse from "../assets/getresponse.png";
import hubspot from "../assets/hubspot00.png";
import zendesk from "../assets/zendesk.png";
import magento from "../assets/magento.png";
import pipedrive from "../assets/pipedrive.png";
import salesforce from "../assets/salesforcez.png";
import intercom from "../assets/intercom.png";
import stripe from "../assets/stripe.png";
import mandrill from "../assets/mandrill.png";
import zoho from "../assets/zoho.png";


const services = [
  { name: "Chargebee", image: chargebee },
  { name: "Segment", image: segment },
  { name: "GetResponse", image: getResponse },
  { name: "HubSpot", image: hubspot },
  { name: "Zendesk", image: zendesk },
  { name: "Magento", image: magento },
  { name: "Pipedrive", image: pipedrive },
  { name: "Salesforce", image: salesforce },
  { name: "Intercom", image: intercom },
  { name: "Stripe", image: stripe },
  { name: "Mandrill", image: mandrill },
  { name: "Zoho", image: zoho },
];

export default function IntegrationServices() {
  return (
    <div className="py-20 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-xl text-red-600 font-semibold">
          PREDICTIFY CONNECTS DIRECTLY TO YOUR EXISTING SYSTEMS
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mt-2">
          Connect Predictify to the systems you use daily and automatically import your existing customer data to make Churnly even smarter.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-lg p-6 flex items-center justify-center bg-white"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-28 h-28 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

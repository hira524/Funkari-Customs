"use client";

import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ProductType } from "@/type/ProductType";

interface Props {
  data: ProductType | null;
  isOpen: boolean;
  onClose: () => void;
}

const ModalSizeguideCanvas: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      >
        <div
          className={`relative bg-white rounded-xl max-w-2xl w-full mx-4 p-6 md:p-8 overflow-y-auto max-h-[90vh] ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            className="absolute right-4 top-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center duration-300 cursor-pointer hover:bg-black hover:text-white"
            onClick={onClose}
          >
            <Icon.X size={16} />
          </div>

          {/* Canvas Custom Collection Size Guide Title */}
          <div className="mb-8">
            <div className="bg-[#59392A] text-white px-6 py-4 rounded-sm">
              <h2 className="text-3xl font-bold">Canvas Custom</h2>
              <h2 className="text-3xl font-bold">Collection</h2>
              <h2 className="text-3xl font-bold">Size Guide</h2>
              <div className="h-0.5 bg-white w-full mt-2"></div>
            </div>
          </div>

          {/* Size Chart Table matching the provided image */}
          <div className="overflow-x-auto mb-6 relative">
            <div
              className="absolute inset-0 bg-gray-200 opacity-30 -z-10"
              style={{
                borderRadius: "2px",
                transform: "rotate(-1deg) scale(1.02)",
              }}
            ></div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4 text-center">EU</th>
                  <th className="py-3 px-4 text-center">UK</th>
                  <th className="py-3 px-4 text-center">MIN (mm)</th>
                  <th className="py-3 px-4 text-center">MAX (mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-center">36</td>
                  <td className="py-2 px-4 text-center">3½</td>
                  <td className="py-2 px-4 text-center">226,5</td>
                  <td className="py-2 px-4 text-center">233,0</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-center">37</td>
                  <td className="py-2 px-4 text-center">4</td>
                  <td className="py-2 px-4 text-center">233,0</td>
                  <td className="py-2 px-4 text-center">240,0</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-center">38</td>
                  <td className="py-2 px-4 text-center">5</td>
                  <td className="py-2 px-4 text-center">240,0</td>
                  <td className="py-2 px-4 text-center">246,5</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-center">39</td>
                  <td className="py-2 px-4 text-center">6</td>
                  <td className="py-2 px-4 text-center">246,5</td>
                  <td className="py-2 px-4 text-center">253,0</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-center">40</td>
                  <td className="py-2 px-4 text-center">6½</td>
                  <td className="py-2 px-4 text-center">253,0</td>
                  <td className="py-2 px-4 text-center">260,0</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-center">41</td>
                  <td className="py-2 px-4 text-center">7</td>
                  <td className="py-2 px-4 text-center">260,0</td>
                  <td className="py-2 px-4 text-center">266,5</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-center">42</td>
                  <td className="py-2 px-4 text-center">8</td>
                  <td className="py-2 px-4 text-center">266,5</td>
                  <td className="py-2 px-4 text-center">273,0</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-center">43</td>
                  <td className="py-2 px-4 text-center">9</td>
                  <td className="py-2 px-4 text-center">273,0</td>
                  <td className="py-2 px-4 text-center">280,0</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-center">44</td>
                  <td className="py-2 px-4 text-center">10</td>
                  <td className="py-2 px-4 text-center">280,0</td>
                  <td className="py-2 px-4 text-center">286,5</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-center">45</td>
                  <td className="py-2 px-4 text-center">10½</td>
                  <td className="py-2 px-4 text-center">286,5</td>
                  <td className="py-2 px-4 text-center">293,0</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-center">46</td>
                  <td className="py-2 px-4 text-center">11</td>
                  <td className="py-2 px-4 text-center">293,0</td>
                  <td className="py-2 px-4 text-center">300,0</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Attribution */}
          <div className="text-right text-sm italic text-gray-500 mt-2">
            Funkari Customs©
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSizeguideCanvas;

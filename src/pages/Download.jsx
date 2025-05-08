import React, { useEffect } from 'react';
import Ribbon from '../components/Ribbon';

const Download = () => {
  const text1 = "Download";

  useEffect(() => {
    document.title = "PUSOM Download | Purbanchal University School of Management";
  }, []);


  return (
    <>
      <Ribbon text1={text1} text3={text1} />
      <section className='container mx-auto px-4 my-16'>
        <div className="overflow-x-auto shadow-lg ">
          <table className="w-full table-auto border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="text-left text-gray-700 text-sm md:text-base">
                <th className="px-4 py-3 border-b">Resource Files</th>
                <th className="px-4 py-3 border-b">Last Modified</th>
                <th className="px-4 py-3 border-b">Downloads</th>
              </tr>
            </thead>
            <tbody>
              {
                [
                  { img: "/assets/images/download/pdf.svg", name: "224929-P1PITP.ai", date: "10/6/2020", link: "/assets/downloads/224929-P1PITP-594.ai" },
                  { img: "/assets/images/download/docs.svg", name: "224929-P1PITY-911", date: "10/6/2020", link: "/assets/downloads/224929-P1PITY-911.eps" },
                  { img: "/assets/images/download/pdf.svg", name: "224929-P1PIU1-159", date: "10/6/2020", link: "/assets/downloads/224929-P1PIU1-159.jpg" },
                  { img: "/assets/images/download/files.svg", name: "Fonts", date: "10/6/2020", link: "/assets/downloads/Fonts.txt" },
                  { img: "/assets/images/download/pdf.svg", name: "License free", date: "10/6/2020", link: "/assets/downloads/License free.txt" },
                  { img: "/assets/images/download/docs.svg", name: "License premium", date: "10/6/2020", link: "/assets/downloads/License premium.txt" },
                  { img: "/assets/images/download/pdf.svg", name: "Resources", date: "10/6/2020", link: "/assets/downloads/Resources.txt" },
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition border-b">
                    <td className="px-4 py-3 flex items-center gap-x-6">
                      <img src={item.img} alt="file-icon" className="max-md:w-5 max-md:h-5 lg:w-10 lg:h-15" />
                      <span className='max-md:text-[14px]'>{item.name}</span>
                    </td>
                    <td className="px-4 py-3">{item.date}</td>
                    <td className="px-4 py-3">
                      <a
                        href={item.link}
                        download
                        className="bg-red-600 max-md:text-[12px] font-semibold hover:bg-red-700 text-white flex items-center gap-2 px-4 py-2 rounded-md w-fit transition"
                      >
                        Download
                        <img
                          src="/assets/images/download/download.svg"
                          alt="download"
                          className="h-5 w-5"
                        />
                      </a>
                    </td>
                  </tr>
                ))}

              <tr>
                <td colSpan={3} className="text-center py-6">
                  <a
                    href="/assets/downloads/all-resources.zip"
                    download
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-flex items-center gap-2 transition"
                  >
                    <img
                      src="/assets/images/download/download.svg"
                      alt="download"
                      className="h-5 w-5"
                    />
                    Download All Resources
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Download;

import axios from "axios";

/**
 * Downloads the current resume as a PDF file.
 * @param id Resume ID to download the resume
 * @returns A Resume PDF
 */
export const downloadPdf = async (token: string, id: string) => {
  return await axios.get(`${process.env.NEXT_PUBLIC_PAPYRUS}/api?id=${id}`, {
    responseType: "arraybuffer",
    headers: {
      "Access-Control-Allow-Origin": "*",
      authorization: token,
      Accept: "application/pdf"
    }
  });
};

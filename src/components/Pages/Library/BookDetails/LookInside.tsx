"use client";

import { Button } from "antd";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "core-js/full/promise/with-resolvers.js";

// Polyfill for environments where window is not available (e.g., server-side rendering)
if (typeof Promise.withResolvers === "undefined") {
  if (window) {
    // @ts-expect-error This does not exist outside of polyfill which this is doing
    window.Promise.withResolvers = function () {
      let resolve, reject;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      return { promise, resolve, reject };
    };
  } else {
    // @ts-expect-error This does not exist outside of polyfill which this is doing
    global.Promise.withResolvers = function () {
      let resolve, reject;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      return { promise, resolve, reject };
    };
  }
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   // "pdfjs-dist/build/pdf.worker.min.mjs",
//   "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

// pdfjs.GlobalWorkerOptions.workerSrc =
//   "https://unpkg.com/pdfjs-dist@4.4.168/legacy/build/pdf.worker.min.mjs";

const LookInside = ({ pdf }: { pdf: string }) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  const [pageWidth, setPageWidth] = useState<number>(200); // Default width

  useEffect(() => {
    // Adjust the PDF width based on the screen width
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1200) {
        setPageWidth(400); // Large screens
      } else if (width > 768) {
        setPageWidth(300); // Tablets
      } else {
        setPageWidth(250); // Mobile devices
      }
    };

    // Set initial width
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={`https://cors-anywhere.herokuapp.com/${pdf}`}
        onLoadSuccess={onDocumentLoadSuccess}
        error="Failed to load the PDF document"
      >
        <Page
          className="border"
          width={pageWidth}
          height={600}
          pageNumber={pageNumber}
        />
      </Document>
      <div className="space-x-4 py-3">
        <Button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber <= 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber >= (numPages || 0)}
        >
          Next
        </Button>
      </div>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default LookInside;

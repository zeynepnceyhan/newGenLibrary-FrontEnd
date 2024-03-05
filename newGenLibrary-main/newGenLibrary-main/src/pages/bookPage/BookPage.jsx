import { Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function BookPage() {
  const location = useLocation();
  const { title, formats } = location.state;
  const [htmlUrl, setHtmlUrl] = useState("");

  useEffect(() => {
    // Eğer "text/html" formatı varsa, onun URL'sini al
    if (formats && formats["text/html"]) {
      setHtmlUrl(convertToHttps(formats["text/html"]));
    }
  }, [formats]);

  // Fonksiyon: HTTP URL'yi HTTPS'ye çevirme
  const convertToHttps = (url) => {
    if (url && url.startsWith("http://")) {
      return url.replace("http://", "https://");
    }
    return url;
  };

  return (
    <Center w="full" h="100vh" backgroundColor={"#FFFFFF"}>
      {htmlUrl ? (
        <iframe
          title={title}
          src={htmlUrl}
          style={{ width: "100%", height: "100vh" }}
        ></iframe>
      ) : (
        <div>HTML formatı bulunamadı</div>
      )}
    </Center>
  );
}

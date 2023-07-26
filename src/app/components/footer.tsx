"use client";
import Image from "next/image";

export default function Footer() {
  const medias = [
    { title: "Instagram", url: "https://www.instagram.com/mundosomente" },
    { title: "Facebook", url: "https://www.facebook.com/mundosomente" },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/company/somente/?viewAsMember=true",
    },
  ];
  const openMedia = (ev: React.MouseEvent<HTMLDivElement>, url: string) => {
    console.log(url);
    ev.preventDefault();
    window.open(url, "_blank");
  };
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-3 p-10 align-middle justify-center gap-10">
        <div className="flex align-middle justify-center m-auto">
          <Image
            src={"./logo-caju-somente.svg"}
            width={188}
            height={161}
            alt="Caju Somente"
            className="max-w-auto"
          />
        </div>
        <div className="flex align-middle justify-center">
          <div>
            <p className="mb-5 font-bold">Contato</p>
            <p className="mb-5">
            <Image
                  src={'./icon-phone.svg'}
                  width={24}
                  height={24}
                  alt='(11) 2078-0220'
                  className="max-w-auto float-left"
                />
              (11) 2078-0220 <br />
              <Image
                  src={'./icon-whatsapp.svg'}
                  width={24}
                  height={20}
                  alt='(11) 98889-2732'
                  className="max-w-auto float-left"
                />
              (11) 98889-2732
            </p>
            <p>
              Alameda Xingu, 350 <br />
              Alphaville Industrial <br />
              Barueri - SP
            </p>
          </div>
        </div>
        <div className="flex align-middle justify-center flex-col gap-10">
          {medias.map((media) => (
            <div
              className="flex gap-4 cursor-pointer font-bold w-36 m-auto"
              key={media.title}
              onClick={(ev) => openMedia(ev, media.url)}
            >
              <div className="flex-none">
                <Image
                  src={`./${media.title.toLowerCase()}.svg`}
                  width={24}
                  height={24}
                  alt={media.title}
                  className="max-w-auto"
                />
              </div>
              <div className="flex-1 text-xl">{media.title}</div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

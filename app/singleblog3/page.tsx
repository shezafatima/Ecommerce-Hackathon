import Image from "next/image";
import Link from "next/link";
export default function SingleBlog3() {
  return (
    <div>
      <div className="bg-[#F6F5FF] h-[186px] md:px-[150px] px-[50px]">
        <h1 className="text-[36px] text-[#101750] flex items-center flex-wrap pt-14 font-semibold ">
          Single Blog
        </h1>
        <div className="mt-2 flex items-center gap-3">
          <Link href="/" className="text-black text-[16px]">
            Home .{" "}
          </Link>
          <Link href="/" className="text-black text-[16px]">
            Pages .{" "}
          </Link>
          <Link href="/blog" className="text-[#FB2E86] text-[16px]">
            Single Blog{" "}
          </Link>
        </div>
      </div>
      <div className="md:flex md:mx-[150px] mx-[20px] mt-14 gap-14 ">
        <div className="flex items-center flex-col flex-wrap">
          <div className="lg:w-[790px] w-[290px] ">
            <div className=" ">
              <Image
                src="/blog3.png"
                alt="blog"
                width={1000}
                height={1000}
                className="lg:w-[790px]"
              />
              <div className="flex mt-2 gap-6 flex-wrap">
                <div className="flex justify-center items-center gap-4">
                  <Image width={1000} height={1000} src="/author.png" alt="" className="w-4" />
                  <p className="text-[16px] text-[#1A0B5B] bg-[#FFECE2] w-[127px] rounded-sm text-center">
                    SaberAli
                  </p>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <Image width={1000} height={1000} src="/calendar.png" alt="" className="w-4" />
                  <p className="text-[16px] text-[#1A0B5B] bg-[#FFECE2] w-[127px] rounded-sm text-center">
                    21 August,2020
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h1 className="text-[#151875] text-[20px] md:text-[30px] font-semibold">
                Sit nam congue feugiat nisl, mauris amet nisi. 
                </h1>
                <p className="text-[#8A8FB9] text-[16px] my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                </p>
                <p className="text-[#8A8FB9] text-[16px] my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,
                </p>
                <div className="flex flex-wrap">
                  <div className="bg-[#FC45A0] h-[141px] w-1"></div>
                  <p className="text-[#8A8FB9] text-[16px] my-4 italic leading-10  flex items-center font-semibold">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Commodo dictum sapien, amet, consequat. <br /> Lorem ipsum dolor
                    sit amet, consectetur <br /> adipiscing elit. Commodo dictum
                    sapien, amet, consequat toamk risusu”
                  </p>
                </div>
                <div className="md:flex gap-10 mt-8">
                  <Image
                    src="/img2.png"
                    alt="img1.png"
                    width={1000}
                    height={1000}
                    className="w-[317px]"
                  />
                  <Image
                    src="/img1.png"
                    alt="img1.png"
                    width={1000}
                    height={1000}
                    className="w-[317px] md:mt-0 mt-4"
                  />
                </div>
                <p className="text-[#8A8FB9] text-[16px] my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,
                </p>
                <div className="flex flex-wrap gap-2 mt-10">
                  <Image
                    src="/pic1.png"
                    width={1000}
                    height={1000}
                    alt="img"
                    className="w-[200px]"
                  />
                  <Image
                    src="/pic2.png"
                    width={1000}
                    height={1000}
                    alt="img"
                    className="w-[200px]"
                  />
                  <Image
                    src="/pic3.png"
                    width={1000}
                    height={1000}
                    alt="img"
                    className="w-[200px]"
                  />
                  <Image
                    src="/pic4.png"
                    width={1000}
                    height={1000}
                    alt="img"
                    className="w-[200px]"
                  />
                </div>
                <p className="text-[#8A8FB9] text-[16px] my-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,
                </p>
                <p className="text-[#8A8FB9] text-[16px] my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F8FB] h-[45px] w-full flex justify-between items-center mt-8 px-2">
            <p className="text-[#8A8FB9] text-[16px]">Previous Post</p>
            <p className="text-[#8A8FB9] text-[16px]">Next Post</p>
          </div>
          <div className="mt-10 flex flex-col gap-8">
<Image
src="/image1.png"
alt="img"
width={1000}
height={1000}
className="w-[567px]"/>
<Image
src="/image2.png"
alt="img"
width={1000}
height={1000}
className="w-[567px]"/>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-[22px] text-[#151875] font-semibold md:mt-0 mt-10">Search</h1>
            <input
              type="text"
              placeholder="Search for Posts"
              className="border text-[16px] mt-2 px-2 text-[#9096B2]  outline-gray-400 w-full py-2"
            />
          </div>
          <div>
            <h1 className="text-[22px] text-[#151875] font-semibold mt-12">
              Categories
            </h1>
            <div className="flex mt-3 gap-2">
              <div className="grid grid-rows-3 gap-3">
                <button className="bg-[#F939BF] text-white text-[14px] text-center py-2 px-[9px] rounded-sm ">
                  Hobbies (14)
                </button>
                <button className="hover:bg-[#F939BF] text-[#151875]  hover:text-white text-[14px] text-center py-2 px-[9px] rounded-sm ">
                  Women (21)
                </button>
                <button className="hover:bg-[#F939BF] text-[#151875]  hover:text-white text-[14px] text-center py-2 px-[9px] rounded-sm ">
                  Women (21)
                </button>
              </div>
              <div className="grid grid-rows-3 gap-3">
                <button className="hover:bg-[#F939BF] text-[#151875]  hover:text-white text-[14px] text-center py-2 px-[9px] rounded-sm ">
                  Women (21)
                </button>
                <button className="hover:bg-[#F939BF] text-[#151875]  hover:text-white text-[14px] text-center py-2 px-[9px] rounded-sm ">
                  Women (21)
                </button>
                <button className="hover:bg-[#F939BF] text-[#151875]  hover:text-white text-[14px] text-center py-2 px-[9px] rounded-sm ">
                  Women (21)
                </button>
              </div>
            </div>

            <div className="mt-12">
              <h1 className="text-[22px] text-[#151875] font-semibold">
                Sale Product
              </h1>
              <div className="flex mt-3 gap-2">
                <Image width={1000} height={1000} src="/post1.png" alt="" className="w-[70px] rounded-sm" />
                <div className="flex flex-col">
                  <h1 className="text-[12px] text-[#3F509E]">
                    It is a long established fact
                  </h1>
                  <p className="text-[11px] text-[#8A8FB9]">Aug 09 2020</p>
                </div>
              </div>
              <div className="flex mt-3 gap-2">
                <Image width={1000} height={1000} src="/post2.png" alt="" className="w-[70px] rounded-sm" />
                <div className="flex flex-col">
                  <h1 className="text-[12px] text-[#3F509E]">
                    It is a long established fact
                  </h1>
                  <p className="text-[11px] text-[#8A8FB9]">Aug 09 2020</p>
                </div>
              </div>
              <div className="flex mt-3 gap-2">
                <Image width={1000} height={1000} src="/post3.png" alt="" className="w-[70px] rounded-sm" />
                <div className="flex flex-col">
                  <h1 className="text-[12px] text-[#3F509E]">
                    It is a long established fact
                  </h1>
                  <p className="text-[11px] text-[#8A8FB9]">Aug 09 2020</p>
                </div>
              </div>
              <div className="flex mt-3 gap-2">
                <Image width={1000} height={1000} src="/post4.png" alt="" className="w-[70px] rounded-sm" />
                <div className="flex flex-col">
                  <h1 className="text-[12px] text-[#3F509E]">
                    It is a long established fact
                  </h1>
                  <p className="text-[11px] text-[#8A8FB9]">Aug 09 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h1 className="text-[22px] text-[#151875] font-semibold">
              Recent Posts
            </h1>
            <div className="flex mt-3 gap-2">
              <Image width={1000} height={1000} src="/sale1.png" alt="" className="w-[70px] rounded-sm" />
              <div className="flex flex-col">
                <h1 className="text-[12px] text-[#3F509E]">
                  Elit ornare in enim mauris.
                </h1>
                <p className="text-[11px] text-[#8A8FB9]">Aug 09 2020</p>
              </div>
            </div>
            <div className="flex mt-3 gap-2">
              <Image width={1000} height={1000} src="/sale2.png" alt="" className="w-[70px] rounded-sm" />
              <div className="flex flex-col">
                <h1 className="text-[12px] text-[#3F509E]">
                  Viverra pulvinar et enim.
                </h1>
                <p className="text-[11px] text-[#8A8FB9]">Aug 09 2020</p>
              </div>
            </div>
            <div className="flex mt-3 gap-2">
              <Image width={1000} height={1000} src="/sale3.png" alt="" className="w-[70px] rounded-sm" />
              <div className="flex flex-col">
                <h1 className="text-[12px] text-[#3F509E]">
                  Mattis varius donec fdsfd
                </h1>
                <p className="text-[11px] text-[#8A8FB9]">Aug 09 2020</p>
              </div>
            </div>
            <div className="mt-12">
              <h1 className="text-[22px] text-[#151875] font-semibold">
                Offer Product
              </h1>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col mt-3 gap-2 ">
                  <Image width={1000} height={1000}
                    src="/offer1.png"
                    alt=""
                    className="w-[126px] rounded-sm"
                  />
                  <div className="flex flex-col text-center">
                    <h1 className="text-[12px] text-[#3F509E] font-semibold">
                      Duis lectus est.
                    </h1>
                    <p className="text-[11px] text-[#8A8FB9]">
                      $12.00 - $15.00
                    </p>
                  </div>
                </div>
                <div className="flex flex-col mt-3 gap-2 ">
                  <Image width={1000} height={1000}
                    src="/offer2.png"
                    alt=""
                    className="w-[126px] rounded-sm"
                  />
                  <div className="flex flex-col text-center">
                    <h1 className="text-[12px] text-[#3F509E] font-semibold">
                      Sed placerat.
                    </h1>
                    <p className="text-[11px] text-[#8A8FB9]">
                      $12.00 - $15.00
                    </p>
                  </div>
                </div>
                <div className="flex flex-col mt-3 gap-2 ">
                  <Image width={1000} height={1000}
                    src="/offer3.png"
                    alt=""
                    className="w-[126px] rounded-sm"
                  />
                  <div className="flex flex-col text-center">
                    <h1 className="text-[12px] text-[#3F509E] font-semibold">
                      Netus proin.
                    </h1>
                    <p className="text-[11px] text-[#8A8FB9]">
                      $12.00 - $15.00
                    </p>
                  </div>
                </div>
                <div className="flex flex-col mt-3 gap-2 ">
                  <Image width={1000} height={1000}
                    src="/offer4.png"
                    alt=""
                    className="w-[126px] rounded-sm"
                  />
                  <div className="flex flex-col text-center">
                    <h1 className="text-[12px] text-[#3F509E] font-semibold">
                      Platea in.
                    </h1>
                    <p className="text-[11px] text-[#8A8FB9]">
                      $12.00 - $15.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h1 className="text-[22px] text-[#151875] font-semibold">
                  Follow
                </h1>
                <div className="flex gap-3 mt-3">
                  <Image width={1000} height={1000}
                    src="/facebook1.png"
                    alt=""
                    className="w-[25px] h-[25px]"
                  />
                  <Image width={1000} height={1000} src="/insta1.png" alt="" className="w-[25px] h-[25px]" />
                  <Image width={1000} height={1000}
                    src="/twitter1.png"
                    alt=""
                    className="w-[25px] h-[25px]"
                  />
                </div>
              </div>
              <div className="mt-12">
                <h1 className="text-[22px] text-[#151875] font-semibold">
                  Tags
                </h1>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  <Link
                    href="/"
                    className="text-[16px] text-[#151875] hover:text-[#FB2E86] underline"
                  >
                    General
                  </Link>
                  <Link
                    href="/"
                    className="text-[16px] text-[#151875] hover:text-[#FB2E86] underline"
                  >
                    Atsanil
                  </Link>
                  <Link
                    href="/"
                    className="text-[16px] text-[#151875] hover:text-[#FB2E86] underline"
                  >
                    Insas
                  </Link>
                  <Link
                    href="/"
                    className="text-[16px] text-[#151875] hover:text-[#FB2E86] underline"
                  >
                    Bibsaas
                  </Link>
                  <Link
                    href="/"
                    className="text-[16px] text-[#151875] hover:text-[#FB2E86] underline"
                  >
                    Nulla
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[96px]">
        <Image
          src="/brand.png"
          alt="brand"
          width={1000}
          height={1000}
          className=""
        />
      </div>
    </div>
  );
}



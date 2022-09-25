import React from 'react';
import Link from "next/link";
import Image from "next/image";
import OpenSeaLogo from "../assets/opensea.png";
import {AiOutlineSearch} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {IoCardOutline} from "react-icons/io5";

const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

function Header() {
  return (
    <div className={style.wrapper}>
      <Link href={"/"}>
        <div className={style.logoContainer}>
          <Image src={OpenSeaLogo} width={40} height={40} />
          <p className={style.logoText}>OpenSea</p>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input className={style.searchInput} placeholder="Search items, collections and accounts" />
      </div>
      <div className={style.headerItems}>
        <Link href="/collections/0x451Bd4f145B6e34f38e99DA7373ceAb3C0dd744A" >
          <p className={style.headerItem}>Collections</p>
        </Link>
        <Link href="/stats">
          <p className={style.headerItem}>Stats</p>
        </Link>
        <Link href="/resources">
          <p className={style.headerItem}>Resources</p>
        </Link>
        <Link href="/create">
          <p className={style.headerItem}>Create</p>
        </Link>
        <div className={style.headerIcon}>
          <CgProfile />
        </div>
        <div className={style.headerIcon}>
          <IoCardOutline />
        </div>
      </div>
    </div>
  );
}

export default Header;

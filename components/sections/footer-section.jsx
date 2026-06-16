const FooterSection = () => {
  return (
    <footer className="bg-[#0C0C0C] px-8 sm:px-12 md:px-16 py-6 flex items-center justify-between gap-4">
      <span className="text-[#D7E2EA]/40 text-[10px] font-medium uppercase tracking-widest">
        © {new Date().getFullYear()} Jack. All rights reserved.
      </span>
      <span className="text-[#D7E2EA]/40 text-[10px] font-medium uppercase tracking-widest">
        3D Creator
      </span>
    </footer>
  )
}

export default FooterSection

const ContactButton = ({ href = "#contact" }) => {
  return (
    <a
      href={href}
      aria-label="Contact me"
      className="group inline-block p-[1.5px] rounded-full bg-gradient-to-br from-[#646973] to-[#D7E2EA] cursor-pointer touch-manipulation transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
    >
      <span className="block whitespace-nowrap rounded-full bg-[#0C0C0C] group-hover:bg-[#141414] transition-colors duration-200 px-8 py-4 sm:px-12 sm:py-4 md:px-14 md:py-5 text-xs sm:text-sm md:text-base text-[#D7E2EA] font-black uppercase tracking-wider">
        Contact Me
      </span>
    </a>
  )
}

export default ContactButton

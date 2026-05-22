import {
  Camera,
  Globe,
  Heart,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

function Footer() {
  const quickLinks = [
    'Home',
    'Services',
    'Gallery',
    'About',
    'Contact',
  ]

  const services = [
    'Weddings',
    'Birthdays',
    'Engagements',
    'Baby Showers',
    'Luxury Decorations',
  ]

  const socialLinks = [
    {
      icon: Camera,
      href: '#',
    },

    {
      icon: Globe,
      href: '#',
    },

    {
      icon: Heart,
      href: '#',
    },
  ]

  return (
    <footer
      className="
        mt-24

        bg-[#0d0a0b]

        text-white

        border-t
        border-[#2d2225]
      "
    >
      {/* MAIN SECTION */}

      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          md:px-10
          lg:px-16

          py-16

          grid

          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5

          gap-12
        "
      >
        {/* BRAND */}

        <div className="lg:col-span-2">
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                w-14
                h-14

                rounded-2xl

                bg-gradient-to-br
                from-[#d6b16f]
                to-[#f2c7d7]

                flex
                items-center
                justify-center

                text-black
                font-black
                text-2xl

                shadow-lg
              "
            >
              P
            </div>

            <div>
              <h2
                className="
                  text-3xl
                  font-black
                "
              >
                PartyStylist
              </h2>

              <p
                className="
                  text-sm

                  text-[#a6969b]

                  mt-1
                "
              >
                Luxury Event Planning
              </p>
            </div>
          </div>

          <p
            className="
              text-[#b7a7ad]

              leading-8

              mt-6

              max-w-md
            "
          >
            Creating unforgettable
            celebrations with
            luxurious styling,
            elegant decorations,
            and magical experiences
            tailored for your most
            special moments.
          </p>

          {/* SOCIALS */}

          <div
            className="
              flex
              items-center

              gap-4

              mt-8
            "
          >
            {socialLinks.map(
              (
                social,
                index
              ) => {
                const Icon =
                  social.icon

                return (
                  <a
                    key={index}
                    href={
                      social.href
                    }
                    className="
                      w-12
                      h-12

                      rounded-2xl

                      bg-[#171213]

                      border
                      border-[#2d2225]

                      flex
                      items-center
                      justify-center

                      text-[#d6b16f]

                      hover:bg-[#d6b16f]
                      hover:text-black
                      hover:scale-105

                      transition-all
                      duration-300
                    "
                  >
                    <Icon
                      size={20}
                    />
                  </a>
                )
              }
            )}
          </div>
        </div>

        {/* QUICK LINKS */}

        <div>
          <h3
            className="
              text-lg
              font-bold

              text-[#f2c7d7]

              mb-6
            "
          >
            Quick Links
          </h3>

          <ul className="space-y-4">
            {quickLinks.map(
              (link) => (
                <li
                  key={link}
                >
                  <a
                    href="#"
                    className="
                      text-[#b7a7ad]

                      hover:text-[#d6b16f]

                      transition-colors
                      duration-300
                    "
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* SERVICES */}

        <div>
          <h3
            className="
              text-lg
              font-bold

              text-[#f2c7d7]

              mb-6
            "
          >
            Services
          </h3>

          <ul className="space-y-4">
            {services.map(
              (
                service
              ) => (
                <li
                  key={
                    service
                  }
                >
                  <a
                    href="#"
                    className="
                      text-[#b7a7ad]

                      hover:text-[#d6b16f]

                      transition-colors
                      duration-300
                    "
                  >
                    {service}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* CONTACT */}

        <div>
          <h3
            className="
              text-lg
              font-bold

              text-[#f2c7d7]

              mb-6
            "
          >
            Contact
          </h3>

          <div className="space-y-5">
            {/* EMAIL */}

            <div
              className="
                flex
                items-start
                gap-4
              "
            >
              <div
                className="
                  w-10
                  h-10

                  rounded-xl

                  bg-[#171213]

                  flex
                  items-center
                  justify-center

                  text-[#d6b16f]
                "
              >
                <Mail
                  size={18}
                />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    text-[#8b7c82]
                  "
                >
                  Email
                </p>

                <p
                  className="
                    text-[#e7dde1]

                    mt-1
                  "
                >
                  hello@partystylist.com
                </p>
              </div>
            </div>

            {/* PHONE */}

            <div
              className="
                flex
                items-start
                gap-4
              "
            >
              <div
                className="
                  w-10
                  h-10

                  rounded-xl

                  bg-[#171213]

                  flex
                  items-center
                  justify-center

                  text-[#d6b16f]
                "
              >
                <Phone
                  size={18}
                />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    text-[#8b7c82]
                  "
                >
                  Phone
                </p>

                <p
                  className="
                    text-[#e7dde1]

                    mt-1
                  "
                >
                  +961 70 000 000
                </p>
              </div>
            </div>

            {/* LOCATION */}

            <div
              className="
                flex
                items-start
                gap-4
              "
            >
              <div
                className="
                  w-10
                  h-10

                  rounded-xl

                  bg-[#171213]

                  flex
                  items-center
                  justify-center

                  text-[#d6b16f]
                "
              >
                <MapPin
                  size={18}
                />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    text-[#8b7c82]
                  "
                >
                  Location
                </p>

                <p
                  className="
                    text-[#e7dde1]

                    mt-1
                  "
                >
                  Beirut, Lebanon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}

      <div
        className="
          border-t
          border-[#2d2225]
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto

            px-6
            md:px-10
            lg:px-16

            py-10

            flex
            flex-col
            lg:flex-row

            items-center
            justify-between

            gap-6
          "
        >
          <div>
            <h3
              className="
                text-2xl
                font-black
              "
            >
              Join Our Newsletter
            </h3>

            <p
              className="
                text-[#9f9196]

                mt-2
              "
            >
              Get luxury event
              inspiration and
              exclusive decoration
              ideas delivered to
              your inbox.
            </p>
          </div>

          {/* INPUT */}

          <form
            className="
              w-full
              lg:w-auto

              flex
              flex-col
              sm:flex-row

              gap-4
            "
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="
                min-w-[280px]

                bg-[#171213]

                border
                border-[#2d2225]

                rounded-2xl

                px-5
                py-4

                outline-none

                text-white

                placeholder:text-[#75676c]

                focus:border-[#d6b16f]

                transition-all
              "
            />

            <button
              type="submit"
              className="
                bg-gradient-to-r
                from-[#d6b16f]
                to-[#f2c7d7]

                hover:opacity-90

                text-black
                font-bold

                px-8
                py-4

                rounded-2xl

                shadow-lg

                transition-all
                duration-300
              "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM */}

      <div
        className="
          border-t
          border-[#2d2225]
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto

            px-6
            md:px-10
            lg:px-16

            py-6

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-4
          "
        >
          <p
            className="
              text-sm

              text-[#8b7c82]
            "
          >
            © 2026 PartyStylist.
            All rights reserved.
          </p>

          <div
            className="
              flex
              items-center

              gap-6

              text-sm

              text-[#8b7c82]
            "
          >
            <a
              href="#"
              className="
                hover:text-[#d6b16f]

                transition-colors
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                hover:text-[#d6b16f]

                transition-colors
              "
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
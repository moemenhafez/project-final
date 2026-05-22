import MainLayout from '@/layouts/MainLayout'

function AdminPlacesPage() {
  return (
    <MainLayout>
      <div className="space-y-8 pb-28">
        {/* HEADER */}

        <section
          className="
            bg-white

            rounded-[32px]

            p-6
            md:p-8

            shadow-[0_10px_40px_rgba(0,0,0,0.04)]
          "
        >
          <div
            className="
              flex
              flex-col
              lg:flex-row

              lg:items-center
              lg:justify-between

              gap-6
            "
          >
            {/* TEXT */}

            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  bg-emerald-50

                  text-emerald-700

                  px-4
                  py-2

                  rounded-full

                  text-sm
                  font-semibold

                  mb-5
                "
              >
                🛠️ Admin Workspace
              </div>

              <h1
                className="
                  text-4xl
                  md:text-5xl

                  font-black

                  text-gray-900
                "
              >
                Admin Places
              </h1>

              <p
                className="
                  text-gray-500

                  text-lg

                  mt-4

                  max-w-2xl

                  leading-relaxed
                "
              >
                Manage tourism
                destinations,
                restaurants,
                resorts and hidden
                gems across Lebanon.
              </p>
            </div>

            {/* QUICK CARD */}

            <div
              className="
                bg-[#f5f7f4]

                rounded-[30px]

                p-6

                w-full
                max-w-[320px]
              "
            >
              <p
                className="
                  text-sm

                  text-gray-500
                "
              >
                Active Role
              </p>

              <h2
                className="
                  text-3xl

                  font-black

                  mt-2
                "
              >
                Administrator
              </h2>

              <p
                className="
                  text-gray-500

                  mt-4
                "
              >
                You have full access
                to manage tourism
                content.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT GRID */}

        <section
          className="
            grid
            grid-cols-1
            xl:grid-cols-3

            gap-6

            mt-8
          "
        >
          {/* MAIN PANEL */}

          <div
            className="
              xl:col-span-2

              bg-white

              rounded-[32px]

              p-6
              md:p-8

              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <h2
              className="
                text-3xl

                font-black

                text-gray-900
              "
            >
              Tourism Management
            </h2>

            <p
              className="
                text-gray-500

                mt-3
              "
            >
              Add, update and manage
              tourism experiences
              dynamically.
            </p>

            {/* PLACEHOLDER */}

            <div
              className="
                mt-10

                border-2
                border-dashed
                border-[#dfe5dd]

                rounded-[30px]

                min-h-[320px]

                flex
                items-center
                justify-center

                bg-[#fafcf9]
              "
            >
              <div className="text-center">
                <div className="text-6xl">
                  🌍
                </div>

                <h3
                  className="
                    text-2xl

                    font-black

                    mt-5
                  "
                >
                  Your Admin Content
                </h3>

                <p
                  className="
                    text-gray-500

                    mt-3
                  "
                >
                  Add forms, analytics,
                  tourism cards and
                  management tools
                  here.
                </p>
              </div>
            </div>
          </div>

          {/* SIDE PANEL */}

          <div
            className="
              bg-white

              rounded-[32px]

              p-6

              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <h2
              className="
                text-2xl

                font-black
              "
            >
              Quick Stats
            </h2>

            <div
              className="
                space-y-5

                mt-8
              "
            >
              {/* CARD */}

              <div
                className="
                  bg-[#f5f7f4]

                  rounded-[24px]

                  p-5
                "
              >
                <p
                  className="
                    text-sm

                    text-gray-500
                  "
                >
                  Total Places
                </p>

                <h3
                  className="
                    text-4xl

                    font-black

                    mt-3
                  "
                >
                  24
                </h3>
              </div>

              {/* CARD */}

              <div
                className="
                  bg-[#f5f7f4]

                  rounded-[24px]

                  p-5
                "
              >
                <p
                  className="
                    text-sm

                    text-gray-500
                  "
                >
                  New This Week
                </p>

                <h3
                  className="
                    text-4xl

                    font-black

                    mt-3
                  "
                >
                  8
                </h3>
              </div>

              {/* CARD */}

              <div
                className="
                  bg-[#f5f7f4]

                  rounded-[24px]

                  p-5
                "
              >
                <p
                  className="
                    text-sm

                    text-gray-500
                  "
                >
                  Active Regions
                </p>

                <h3
                  className="
                    text-4xl

                    font-black

                    mt-3
                  "
                >
                  12
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default AdminPlacesPage
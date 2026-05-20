import MainLayout from '@/layouts/MainLayout'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const visitsData = [
  {
    name: 'Tripoli',
    visits: 420,
  },

  {
    name: 'Beirut',
    visits: 680,
  },

  {
    name: 'Batroun',
    visits: 310,
  },

  {
    name: 'Jbeil',
    visits: 250,
  },
]

const sponsoredData = [
  {
    name: 'Sponsored',
    value: 65,
  },

  {
    name: 'Organic',
    value: 35,
  },
]

const COLORS = [
  '#10b981',
  '#d1d5db',
]

function AnalyticsPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1
            className="
              text-4xl
              font-bold
              text-gray-800
            "
          >
            Analytics Dashboard
          </h1>

          <p
            className="
              text-lg
              text-gray-500
              mt-2
            "
          >
            Platform performance and
            marketplace insights.
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
          "
        >
          <div
            className="
              bg-white
              p-6
              rounded-3xl
              shadow-sm
            "
          >
            <p className="text-gray-500">
              Total Visits
            </p>

            <h2
              className="
                text-4xl
                font-bold
                mt-3
                text-gray-800
              "
            >
              1,660
            </h2>
          </div>

          <div
            className="
              bg-white
              p-6
              rounded-3xl
              shadow-sm
            "
          >
            <p className="text-gray-500">
              Sponsored Clicks
            </p>

            <h2
              className="
                text-4xl
                font-bold
                mt-3
                text-yellow-500
              "
            >
              640
            </h2>
          </div>

          <div
            className="
              bg-white
              p-6
              rounded-3xl
              shadow-sm
            "
          >
            <p className="text-gray-500">
              Trip Bookings
            </p>

            <h2
              className="
                text-4xl
                font-bold
                mt-3
                text-emerald-700
              "
            >
              184
            </h2>
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-8
          "
        >
          <div
            className="
              bg-white
              p-8
              rounded-3xl
              shadow-sm
            "
          >
            <div className="mb-6">
              <h2
                className="
                  text-2xl
                  font-bold
                  text-gray-800
                "
              >
                Regional Visits
              </h2>

              <p className="text-gray-500 mt-2">
                Most explored Lebanese
                regions.
              </p>
            </div>

            <div className="h-80">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <BarChart
                  data={visitsData}
                >
                  <XAxis dataKey="name" />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="visits"
                    fill="#10b981"
                    radius={[
                      8,
                      8,
                      0,
                      0,
                    ]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div
            className="
              bg-white
              p-8
              rounded-3xl
              shadow-sm
            "
          >
            <div className="mb-6">
              <h2
                className="
                  text-2xl
                  font-bold
                  text-gray-800
                "
              >
                Sponsored Engagement
              </h2>

              <p className="text-gray-500 mt-2">
                Sponsored vs organic
                interactions.
              </p>
            </div>

            <div className="h-80">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <PieChart>
                  <Pie
                    data={
                      sponsoredData
                    }
                    dataKey="value"
                    outerRadius={120}
                  >
                    {sponsoredData.map(
                      (
                        _,
                        index
                      ) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            COLORS[
                              index
                            ]
                          }
                        />
                      )
                    )}
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default AnalyticsPage
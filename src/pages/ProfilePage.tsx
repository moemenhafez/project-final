import { useState } from 'react'

import toast from 'react-hot-toast'

import MainLayout from '@/layouts/MainLayout'

import {
  getProfile,
  saveProfile,
} from '@/utils/profileStorage'

import {
  getFavoritePlaces,
} from '@/utils/favoritesStorage'

import {
  getSavedPlaces,
} from '@/utils/savedPlacesStorage'

function ProfilePage() {
  const profile =
    getProfile()

  const favorites =
    getFavoritePlaces()

  const savedPlaces =
    getSavedPlaces()

  const [name, setName] =
    useState(profile.name)

  const [bio, setBio] =
    useState(profile.bio)

  const [
    avatar,
    setAvatar,
  ] = useState(
    profile.avatar
  )

  const [
    favoriteRegion,
    setFavoriteRegion,
  ] = useState(
    profile.favoriteRegion
  )

  function handleSaveProfile() {
    saveProfile({
      name,
      bio,
      avatar,
      favoriteRegion,
    })

    toast.success(
      'Profile updated successfully.'
    )
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        <div
          className="
            bg-white
            rounded-3xl
            p-10
            shadow-sm
          "
        >
          <div
            className="
              flex
              flex-col
              xl:flex-row
              gap-10
              items-center
            "
          >
            <img
              src={avatar}
              alt={name}
              className="
                w-40
                h-40
                rounded-full
                object-cover
                shadow-lg
              "
            />

            <div className="flex-1 space-y-5">
              <div>
                <h1
                  className="
                    text-4xl
                    font-bold
                    text-gray-800
                  "
                >
                  {name}
                </h1>

                <p
                  className="
                    text-gray-500
                    mt-3
                  "
                >
                  {bio}
                </p>
              </div>

              <div
                className="
                  flex
                  gap-4
                  flex-wrap
                "
              >
                <div
                  className="
                    bg-emerald-100
                    text-emerald-700
                    px-5
                    py-3
                    rounded-2xl
                    font-semibold
                  "
                >
                  ❤️ Favorites:
                  {
                    favorites.length
                  }
                </div>

                <div
                  className="
                    bg-yellow-100
                    text-yellow-700
                    px-5
                    py-3
                    rounded-2xl
                    font-semibold
                  "
                >
                  🔖 Saved:
                  {
                    savedPlaces.length
                  }
                </div>

                <div
                  className="
                    bg-blue-100
                    text-blue-700
                    px-5
                    py-3
                    rounded-2xl
                    font-semibold
                  "
                >
                  📍 Favorite Region:
                  {' '}
                  {
                    favoriteRegion
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            bg-white
            rounded-3xl
            p-10
            shadow-sm
            space-y-6
          "
        >
          <div>
            <h2
              className="
                text-3xl
                font-bold
                text-gray-800
              "
            >
              Edit Profile
            </h2>

            <p
              className="
                text-gray-500
                mt-2
              "
            >
              Personalize your tourism
              experience.
            </p>
          </div>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) =>
              setName(
                event.target.value
              )
            }
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-100
              outline-none
            "
          />

          <input
            type="text"
            placeholder="Avatar URL"
            value={avatar}
            onChange={(event) =>
              setAvatar(
                event.target.value
              )
            }
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-100
              outline-none
            "
          />

          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(event) =>
              setBio(
                event.target.value
              )
            }
            rows={5}
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-100
              outline-none
              resize-none
            "
          />

          <select
            value={favoriteRegion}
            onChange={(event) =>
              setFavoriteRegion(
                event.target.value
              )
            }
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-100
              outline-none
            "
          >
            <option>
              Beirut
            </option>

            <option>
              Batroun
            </option>

            <option>
              Tripoli
            </option>

            <option>
              Jbeil
            </option>

            <option>
              Tyre
            </option>
          </select>

          <button
            onClick={
              handleSaveProfile
            }
            className="
              w-full
              bg-emerald-700
              text-white
              py-4
              rounded-2xl
              hover:bg-emerald-800
              transition
            "
          >
            Save Profile
          </button>
        </div>
      </div>
    </MainLayout>
  )
}

export default ProfilePage
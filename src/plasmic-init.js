import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "2y3gB8kMpzaQs5tS65h89V",  // ID of a project you are using
      token: "kjHnUVxhTmqzDK3ULmp8Lrr4znCK0YawYRGMygyT3pNcCacydSfIJfUykoCLhhJOhKUSKXWjpiZ1HHGDeaHQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
---
sidebar_position: 3
---

# Media and Downloads

This is a simple guide on creating a media pool and dataset with hard-linking in mind.

You can NOT hard-link between datasets, but you can within the dirs of _a_ dataset.

## Storage Set up

Go to storage tab and create a pool by giving it a name for example `tank` and setting up the VDEVS for that pool, the raid setup is beyond the scope of this guide, so please use the best judgement if you want/need redundancy.

Go to the datasets tab and then press add dataset to create a **single** dataset for media as it will hold all your organized and unorganized media.

- Give it a name for example `media`
- go the advanced options and set its record size to `1M`.

![record-size](/img/media-and-downloads/dataset-record-size.png)

![tank-pool-dataset](/img/media-and-downloads/tank-pool.png)

## Permissions Set Up

Lets set the perms for this dataset:

- Press the edit on the permissions box for the media dataset.
- Strip ACLs if present.
- set the perms like so.

  ![dataset-perms](/img/media-and-downloads/media-perms.png)

## Creating Media Libraries

Go to the system settings -> shell.

```console
cd /mnt/tank/media
```

Change the current directory to **your** dataset path and create your library directories.

You can create 2 dirs series and movies or whatever kind of media dir you want.

I always separate my media from different types like:

- Anime
- TV
- KoreanTV
- Movies
- AnimeMovies
- Comedies
- Video

to create dirs just run the following command for each library you want to use as it's always best to keep unorganized media separate from the organized media.
:

```console
mkdir animes tv movies downloads
```

## Mounting the Media to Apps

Mount the `/mnt/tank/media` dataset as  `/media`, its better to keep the mount as simple as possible and **DON'T** use system level dirs that can potentially be in used by apps...so _don't_ use `/mnt/XXX/XXX` for the mount path.

:::note

Mount Path is the path thats internal to the app.

:::

![dataset-mount](/img/media-and-downloads/dataset-mount.png)

For each app internally reference the media:

- `/media/animes` as a library.
- `/media/downloads` as the download path.

the download client should be setup to download to `/media/downloads` so make sure their default download paths are set accordingly.

make sure to follow the same naming conventions and each app has the same internal path or there **will** be conflicts.

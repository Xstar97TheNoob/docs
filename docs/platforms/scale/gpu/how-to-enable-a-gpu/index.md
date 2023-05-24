# How to Enable a GPU for Scale

A how to guide on adding a gpu to scale.

If you added a GPU to scale and want to use it for an app make sure to do the following:

- GPU support is enabled.
  - Go to apps -> apps settings -> advanced | gpu support enabled.
- The GPU is _not_ isolated for the system to use.
  - Go to system systems -> advanced -> isolated gpus | remove it from the list.

## Nvidia

TrueNas Scale 22.12.2 supports the follow gpu driver; [515.65.01](https://www.nvidia.com/download/driverResults.aspx/191975/) for nvidia gpus, it will list the supported gpus for that version.

You can verify the gpu is working or accessible for Nvidia by running the following command:

```shell
nvidia-smi
```

## Intel

```shell
lspci | grep ' VGA ' | cut -d" " -f 1 | xargs -i lspci -v -s {}
```

## AMD

```shell
lspci | grep -i ' amd ' | cut -d" " -f 1 | xargs -i lspci -v -s {}
```

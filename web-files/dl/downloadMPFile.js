let vList;
fetch("https://iatj-modpack.github.io/meta.json", {
    method: "GET",
    headers: {
        Accept: "application/json",
    },
})
    .then((response) => response.json())
    .then((response) => {
        var vList = response;
        var latestV = vList.versions.length;
        for (var currentV = 0; currentV < latestV; currentV++) {
            if (document.location.pathname == vList.versions[currentV].id) {
                console.log(vList.versions[currentV].id)
                document.location = vList.versions[currentV].mpfile
            } else if (currentV == 0 && document.location.pathname == "https://iatj-modpack.github.io/dl/latest") {
                document.location = `https://iatj-modpack.github.io/versions/${vList.versions[latestV].id}/iatj_modpack_file_${vList.versions[latestV].id}.mrpack`
            } else if (currentV == 0 && document.location.pathname == "/iatj/dl/0.0.0") {
                document.location = "https://iatj-modpack.github.io/versions/0.0.0/iatj_modpack_file_0.0.0.mrpack"
            } else if (currentV == latestV) {
                document.location = "https://kckarnige.github.io/iatj"
            }
        }
    })

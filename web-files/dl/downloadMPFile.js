let vList;
fetch("/iatj/meta.json", {
    method: "GET",
    headers: {
        Accept: "application/json",
    },
})
    .then((response) => response.json())
    .then((response) => (vList = response))
    .then(() => {
        for (var i = 0; i < vList.versions.length; i++) {
            if (document.location.pathname == vList.versions[i].id) {
                console.log(vList.versions[i].id)
                document.location = vList.versions[i].mpfile
            } else if (i == 0 && document.location.pathname == "/iatj/dl/latest") {
                document.location = `https://kckarnige.github.io/iatj/versions/vList.versions[vList.versions.length].id/iatj_modpack_file_${vList.versions[vList.versions.length].id}.mrpack`
            } else if (i == 0 && document.location.pathname == "/iatj/dl/0.0.0") {
                document.location = "https://kckarnige.github.io/iatj/versions/0.0.0/iatj_modpack_file_0.0.0.mrpack"
            } else {
                document.body.innerHTML = "<p>Version not found.</p>"
            }
        }
    })

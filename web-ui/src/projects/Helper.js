const LOC = process.env.PUBLIC_URL + "/project_info/"

export async function readData(file) {
    return fetch(LOC + file).then((res) => res.text())
}

export function getName(project) {
    return readData(project + "/name.txt")
}

export function getDescription(project) {
    return readData(project + "/description.txt")
}

export function getReleaseNotes(project, version) {
    return readData(project + "/release_notes/" + version + ".txt")
}
// // Creating function.
function make_Album(artists_name, album_title, tracks) {
    var album = {
        artist: artists_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and three variables with different values.
var album1 = make_Album("Shahid", "Album Title 1");
var album2 = make_Album("Humzah", "Album Title 2");
// // calling the third function.
var album3 = make_Album("Haris", "Album Title 3", 5);
// // Printing values of our objects created function.
console.log(album1);
console.log(album2);
console.log(album3);
// creating function
// function children_Name (child_name : string, school_name : string, study_days? : number){
//     let children:{name:string, school:string, days?:number} = {
//         name:child_name,
//         school:school_name,
//     };
//     if(study_days !== undefined){
//         children.days=study_days
//     };
//     return children
// }
//  let child1 = children_Name ("Hadiya", "Iqra");
//  let child2 = children_Name ("Haniya", "Bag e Halar",);
//  let child3 = children_Name ("Musfirah", "Bag e Halar", 5)
//  console.log(child1)
//  console.log(child2)
//  console.log(child3)

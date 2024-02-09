
import Parse from 'parse'

export function queryNotes(type, searchValue, pageNumber, pageSize, addNewResults) {
    //Define query
    const regex = new RegExp(searchValue, 'i');

    const queryTitle = new Parse.Query('ParseNote');
    queryTitle.matches('title', regex);

    const queryContent = new Parse.Query('ParseNote');
    queryContent.matches('content', regex);

    const query = Parse.Query.or(queryTitle, queryContent);
    query.descending("updatedAt");

    const skip = (pageNumber - 1) * pageSize;
    query.limit(pageSize);
    query.skip(skip);

    if (type === 'Notes') {
        query.greaterThan('status', -7);
    } else if (type === 'Bin') {
        query.equalTo('status', -7);
    }


    query
        .find()
        .then(rs => {
            addNewResults(rs);
        })
        .catch(error => {
            console.log(error);
        });

}
```javascript
//Corrected Aggregation Pipeline
db.collection.aggregate([
  {
    $match: { "fieldName": { $exists: true } } //Ensure field exists
  },
  {
    $group: {
      _id: "$fieldName",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 10
  }
])
```
#Thacks Idea Board

##Tech used by now
 - coffee
 - grunt
 - express + mongodb
 - redis
 - forever 
 
##How to start
```
	forever start app.js
``` 

##Website for test
```
http://thu.io:3001
```

##newIdea test
```
curl -X POST -H 'content-type:application/json' -d '{"user_id":"test","description":"this is an test_idea"}' http://localhost:3001/idea
```

##listUser test
```
curl -d 'http://localhost:3001/user'
```
---
author_image: blog-image.png
author: Sharon Leah
bio: Flutter Developer
title: "Using RestAPIs and GraphQL APIs in One Flutter Applicaton "
date: 2022-04-25T08:45:18.559Z
excerpt: "This blog is on "
seo:
  title: blog
  description: blog
  keywords:
    - blog
---
Passing data on most flutter applications over time has been done by only one third-party library throughout the application, i.e either REST API endpoint or GraphQL endpoints alone.

> **How do we handle a situation where an application is required to integrate both endpoints?**

To do so at best, the application should be well organized following the stacked architecture. To know more about stacked architecture you can go through this article: [Integrating Graphql Apis with Stacked Architecture](https://fidisys.com/blog/integrating-graphql-and-restapis-with-stacked-architecture-in-flutter/).

Systematically, as a developer, you could begin with integrating REST APIs first, then later on move to GraphQL Endpoints integration.

Flutter applications do have networking and JSON Serialization modules. **Networking module** do contain, app data localization, URL constants, retrofit file, and service models. While the **JSON Serialization module** contains model classes that are structures based on responses from the API call.

### Retrofit.

To call Rest APIs by sending dynamic headers, parameters, requests, and responses in a custom and secured way we use the [retrofit](https://pub.dev/packages/retrofit/install) package, which is installed in the pubspec.yaml file.

> Retrofit  is a dio cient, that make consuming rest APIs easier. 

some of the dependencies and dev dependencies that are used as helpers to the retrofit depedency are:

* **Dio** - is used to create a retrofit client to enable request making. It also provides the developer with the ability to add interceptors. Together with the http-wrapper, it also helps in error handling.
* **Build-runner and retrofit_generator** - used to generate the .g.dart files. By running the command below after adding the respective methods.

```
flutter pub run build_runner build --delete-conflicting-outputs
```



* **json_serializable** - used to automatically generate code to and from JSON by annotating dart classes.

An example, of how a retrofit class looks like:

> Kindly note the methods for get, post, put and delete, will contain different properties pass.

**Get :**

The get method in RestAPI is used to fetch data from a given endpoint. In Retrofit, its created as below, with query, and header values passed:

```
@RestApi(
  baseUrl: "https://cat-fact.herokuapp.com",
)
abstract class RestClient {
  factory RestClient(Dio dio, {String baseUrl}) = _RestClient;
  
  @GET('{url}')
  Future<CatsData> assetAllCatData(
      @Path() String url,
      @Query("count") double count,
      @Header("x-cat-fact-uid") String? uId,
      @Header("service") serviceHeader);
  }
```

**Post:**

Post method is used to send data from the application to the API. It is created as follows:

```
@POST("{url}")
  Future<dynamic> postRegistration(
      @Path() String url,
     @Header("x-cat-fact-uid") String? uId,
      @Body() RegistrationPayLoad registrationPayLoad);
```

**Put/Patch:**

Put method is used to update data on the database.

```
@PUT('{url}')
  Future<UpdateResponse> updateUserData(
      @Path() String url,
      @Header("x-cat-fact-uid") String? uId,
      @Body() UpdateUserData updateUserData);
```

**Delete:**

Used to delete data from the database:

```
@DELETE("{url}")
  Future<dynamic> deleteUserData(
      @Path() String url,
       @Header("x-cat-fact-uid") String? uId,,
      @Header("service") String service);
```

**RestApi call procedure flow using retrofit**

1.
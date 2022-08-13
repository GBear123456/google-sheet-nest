# Generate a new module
nest g resource MODULE_NAME

# Swagger endpoint
baseUrl/api \
ex:http://localhost:8000/api

# Authorize endpoints
Use @UseGuards decorator to allow access from authorized requests

ex:
```bash
@UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
```

# Please check below document to see details of Nestjs
./doc/nestjs-a-progressive-nodejs-framework_compress.pdf
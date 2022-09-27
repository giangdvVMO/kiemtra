import {
  ClassSerializerInterceptor,
  Controller,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@Controller({
  version: ['1'],
  path: 'user',
})
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('User')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post('create-user')
  // createUser(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }
  // @ApiParam({
  //   name: 'id',
  //   type: 'string',
  //   description: 'id of user',
  // })
  // @ApiOkResponse(USER_SWAGGER_RESPONSE.GET_USER_SUCCESS)
  // @ApiNotFoundResponse(USER_SWAGGER_RESPONSE.NOT_FOUND_EXCEPTION)
  // @Get('id')
  // getUser(@GetUser() user, @Param('id') id) {
  //   return this.userService.getUser(id);
  // }

  // @Patch('change-password')
  // @ApiOkResponse(USER_SWAGGER_RESPONSE.UPDATE_SUCCESS)
  // @ApiBadRequestResponse(USER_SWAGGER_RESPONSE.BAD_REQUEST_WRONG_PASSWORD)
  // @ApiNotFoundResponse(USER_SWAGGER_RESPONSE.NOT_FOUND_EXCEPTION)
  // changePassword(
  //   @GetUser() user,
  //   @Body() changeUserPasswordDto: ChangeUserPasswordDto,
  // ) {
  //   return this.userService.changePassword(user?.sub, changeUserPasswordDto);
  // }

  // @Get('get-list')
  // @ApiOkResponse(USER_SWAGGER_RESPONSE.GET_LIST_SUCCESS)
  // @ApiBadRequestResponse(USER_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  // getListUser(@Query() query: QueryParamDto) {
  //   return this.userService.getListUser(query);
  // }

  // @Patch('update-infor-user')
  // @UseInterceptors(FileInterceptor('image'))
  // @ApiConsumes('multipart/form-data')
  // @ApiBody({
  //   description: 'List update infor user',
  //   type: FileUploadDto,
  // })
  // @ApiOkResponse(USER_SWAGGER_RESPONSE.UPDATE_SUCCESS)
  // @ApiNotFoundResponse(USER_SWAGGER_RESPONSE.NOT_FOUND_EXCEPTION)
  // updateInforUser(
  //   @GetUser() user,
  //   @Body() updateInforUser: UpdateInforUser,
  //   @UploadedFile() image: Express.Multer.File,
  // ) {
  //   const id = user?.sub;
  //   if (image) {
  //     return this.userService.updateUserInfor(id, updateInforUser, image);
  //   }
  //   return this.userService.updateUserInfor(id, updateInforUser);
  // }

  // @Post()
  // @ApiOkResponse(USER_SWAGGER_RESPONSE.CREATE_SUCCESS)
  // @ApiBadRequestResponse()
  // public createUser(@Body() body: CreateInternaleUserDto) {
  //   const {
  //     last_name,
  //     first_name,
  //     email,
  //     birthday,
  //     start_date,
  //     phone,
  //     type,
  //     gender,
  //     position,
  //   } = body;
  //   const data = {
  //     last_name,
  //     first_name,
  //     email,
  //     birthday,
  //     start_date,
  //     phone,
  //     type,
  //     gender,
  //     position,
  //   };
  //   return this.userService.createUser(data);
  //}
}

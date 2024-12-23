import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './Provider/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Restaurant } from 'src/restaurants/restaurant.entity';
import { Review } from 'src/reviews/review.entity';
import { Reservation } from 'src/reservations/reservation.entity';
import { Contact } from 'src/contact/contact.entity';
import { MailerService } from 'src/mailer/provider/mailer.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports: [TypeOrmModule.forFeature([User, Restaurant, Review, Reservation,Contact,MailerService])],
})
export class UsersModule {}

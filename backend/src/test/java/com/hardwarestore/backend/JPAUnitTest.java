package com.hardwarestore.backend;

import com.hardwarestore.backend.models.User;
import com.hardwarestore.backend.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Date;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class JPAUnitTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    UserRepository userRepository;

    @Test
    public void should_find_no_users_if_repository_is_empty() {
        Iterable users = userRepository.findAll();
        assertThat(users).isEmpty();
    }

    @Test
    public void should_store_a_user() {
        User user = userRepository.save(new User("username", "email@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", false));
        assertThat(user).hasFieldOrPropertyWithValue("username", "username");
        assertThat(user).hasFieldOrPropertyWithValue("email", "email@gmail.com");
        assertThat(user).hasFieldOrPropertyWithValue("password", "password");
        assertThat(user).hasFieldOrPropertyWithValue("name", "name");
        assertThat(user).hasFieldOrPropertyWithValue("surname", "surname");
        assertThat(user).hasFieldOrPropertyWithValue("street", "street");
        assertThat(user).hasFieldOrPropertyWithValue("houseNumber", "houseNumber");
        assertThat(user).hasFieldOrPropertyWithValue("postalCode", "postalCode");
        assertThat(user).hasFieldOrPropertyWithValue("city", "city");
        assertThat(user).hasFieldOrPropertyWithValue("isAccountNonLocked", false);
    }

    @Test
    public void should_find_all_users() {
        User user1 = new User("username", "email@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", false);
        entityManager.persist(user1);
        User user2 = new User("username2", "email2@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", false);
        entityManager.persist(user2);
        User user3 = new User("username3", "email3@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", false);
        entityManager.persist(user3);
        Iterable users = userRepository.findAll();
        assertThat(users).hasSize(3).contains(user1, user2, user3);
    }

    @Test
    public void should_find_user_by_id() {
        User user1 = new User("username", "email@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", false);
        entityManager.persist(user1);
        User user2 = new User("username2", "email2@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", false);
        entityManager.persist(user2);
        User foundUser = userRepository.findById(user2.getId()).get();
        assertThat(foundUser).isEqualTo(user2);
    }

    @Test
    public void should_find_added_users() {
        User user1 = new User("username", "email@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", false);
        entityManager.persist(user1);
        User user2 = new User("username2", "email2@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", true);
        entityManager.persist(user2);
        User user3 = new User("username3", "email3@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", false);
        entityManager.persist(user3);
        Iterable users = userRepository.findByIsAccountNonLocked(false);
        assertThat(users).hasSize(2).contains(user1, user2);
    }

    @Test
    public void should_update_user_by_id() {
        User user1 = new User("username", "email@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", false);
        entityManager.persist(user1);
        User user2 = new User("username2", "email2@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", false);
        entityManager.persist(user2);
        User updatedUser = new User("username3", "email3@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "updated street",
                "updated houseNumber", "updated postalCode", "updated city", false);

        User _user = userRepository.findById(user2.getId()).get();

        _user.setCity(updatedUser.getCity());
        _user.setHouseNumber(updatedUser.getHouseNumber());
        _user.setPostalCode(updatedUser.getPostalCode());
        _user.setStreet(updatedUser.getStreet());

        userRepository.save(_user);

        User checkUser = userRepository.findById(user2.getId()).get();

        assertThat(checkUser.getId()).isEqualTo(user2.getId());
        assertThat(checkUser.getCity()).isEqualTo(updatedUser.getCity());
        assertThat(checkUser.getHouseNumber()).isEqualTo(updatedUser.getHouseNumber());
        assertThat(checkUser.getPostalCode()).isEqualTo(updatedUser.getPostalCode());
        assertThat(checkUser.getStreet()).isEqualTo(updatedUser.getStreet());
    }

    @Test
    public void should_delete_user_by_id() {
        User user1 = new User("username", "email@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", false);
        entityManager.persist(user1);
        User user2 = new User("username2", "email2@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", false);
        entityManager.persist(user2);
        User user3 = new User("username3", "email3@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", false);
        entityManager.persist(user3);
        userRepository.deleteById(user2.getId());
        Iterable users = userRepository.findAll();
        assertThat(users).hasSize(2).contains(user1, user3);
    }

    @Test
    public void should_delete_all_users() {
        User user1 = new User("username", "email@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", false);
        entityManager.persist(user1);
        User user2 = new User("username2", "email2@gmail.com", "password", "name",
                "surname", new Date(System.currentTimeMillis()), "street",
                "houseNumber", "postalCode", "city", false);
        entityManager.persist(user2);
        userRepository.deleteAll();
        assertThat(userRepository.findAll()).isEmpty();
    }
}

package com.hardwarestore.backend;

import com.hardwarestore.backend.models.User;
import com.hardwarestore.backend.repository.RoleRepository;
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

    @Autowired
    RoleRepository roleRepository;

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
}

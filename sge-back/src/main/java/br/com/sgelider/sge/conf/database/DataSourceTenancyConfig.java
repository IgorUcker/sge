package br.com.sgelider.sge.conf.database;

//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//import javax.persistence.EntityManagerFactory;
//import javax.sql.DataSource;
//
//import org.hibernate.MultiTenancyStrategy;
//import org.hibernate.cfg.Environment;
//import org.hibernate.context.spi.CurrentTenantIdentifierResolver;
//import org.hibernate.engine.jdbc.connections.spi.MultiTenantConnectionProvider;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.jdbc.datasource.DriverManagerDataSource;
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.JpaVendorAdapter;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
//import org.springframework.transaction.PlatformTransactionManager;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
//import br.com.sgelider.sge.SgeLiderApplication;
//import br.com.sgelider.sge.conf.utils.ConfigDbDefault;
//import br.com.sgelider.sge.conf.utils.ConfigDefaultDb;
//
//@Configuration
//@EnableJpaRepositories(
//        entityManagerFactoryRef = SgeLiderApplication.FACTORY_TENANCY,
//        transactionManagerRef = SgeLiderApplication.TRANSACTION_TENANCY,
//        basePackages = "dev.wiesner.sgc.tenancy.repository"
//)
//@EnableTransactionManagement
public class DataSourceTenancyConfig {
	
//	@Autowired
//	private org.springframework.core.env.Environment environment;
//	
//	@Bean
//    public JpaVendorAdapter jpaVendorAdapter() {
//        return new HibernateJpaVendorAdapter();
//    }
//	
//	@Bean(name = SgeLiderApplication.DATASOURCE_TENANCY)
//    public DataSource getDataSource() {
//
//        DriverManagerDataSource dataSource = new DriverManagerDataSource();
//        dataSource.setDriverClassName("org.postgresql.Driver" );
//        dataSource.setUrl("jdbc:postgresql://" + environment.getProperty("database.sistema.host" ) + ":" + environment.getProperty("database.port" ) + "/" + SgeLiderApplication.DB_DEFAULT);
//        dataSource.setUsername(environment.getProperty("database.user" ));
//        dataSource.setPassword(environment.getProperty("database.pass" ));
//
//        return dataSource;
//    }
//	
//	@Bean(name = SgeLiderApplication.FACTORY_TENANCY)
//    public LocalContainerEntityManagerFactoryBean entityManagerFactory(@Qualifier(SgeLiderApplication.DATASOURCE_TENANCY) DataSource dataSource,
//                                                                       MultiTenantConnectionProvider multiTenantConnectionProviderImpl,
//                                                                       CurrentTenantIdentifierResolver currentTenantIdentifierResolverImpl) {
//
//        Map<String, Object> properties = new HashMap<>();
//        List<ConfigDbDefault> list = ConfigDefaultDb.toList(
//                environment.getProperty("database.user" ),
//                environment.getProperty("database.pass" ),
//                environment.getProperty("database.host" ),
//                environment.getProperty("database.port" ),
//                SgeLiderApplication.DB_DEFAULT);
//
//        for (ConfigDbDefault c : list) {
//            properties.put(c.getChave(), c.getValor());
//        }
//        
//        properties.put(Environment.MULTI_TENANT, MultiTenancyStrategy.DATABASE);
//        properties.put(Environment.MULTI_TENANT_CONNECTION_PROVIDER, multiTenantConnectionProviderImpl);
//        properties.put(Environment.MULTI_TENANT_IDENTIFIER_RESOLVER, currentTenantIdentifierResolverImpl);
//        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
//        em.setPersistenceUnitName(SgeLiderApplication.PERSISTENCE_UNIT_NAME_TENANCY);
//        em.setDataSource(dataSource);
//        em.setPackagesToScan(new String[]{"br.com.sgelider.sge.tenancy.domain"});
//        em.setJpaVendorAdapter(jpaVendorAdapter());
//        em.setJpaPropertyMap(properties);
//
//        return em;
//    }
//	
//	@Bean(name = SgeLiderApplication.TRANSACTION_TENANCY)
//    public PlatformTransactionManager transactionManager(@Qualifier(SgeLiderApplication.FACTORY_TENANCY) EntityManagerFactory emf) {
//        JpaTransactionManager transactionManager = new JpaTransactionManager();
//        transactionManager.setEntityManagerFactory(emf);
//
//        return transactionManager;
//    }

}
